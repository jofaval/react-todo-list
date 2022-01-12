import React, { useContext } from "react";

import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import styled from "styled-components";
import Button from "../Buttons/Button/Button";
import { TodoContext } from "src/context/TodoProvider";
import { finishEditingTask, setEditedTask } from "src/store/actionCreator";
import DateLocale from "../Date/DateLocale/DateLocale";
import TimeAgo from "../Date/TimeAgo/TimeAgo";

type Props = {
    task: ITask
}

const TaskWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: .5rem;
    margin: .5rem;
    /* border: 1px solid black; */
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: 0 4px 10px rgba(0,0,0,.1);
    border: 2px solid transparent;

    transition: all .2s;

    position: relative;

    &:is(:hover, :focus, :active) {
        button {
            display: block;
        }
    }
`

const TaskCompleteWrapper = styled(TaskWrapper)`
    transition: all .2s;
    // border-color: ${props => props.theme.secondaryColor};
    box-shadow: 0 0px 25px ${props => props.theme.secondaryColorShadow};
    max-width: 90%;
    margin-left: 10%;
`

const TaskDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
    margin: 1rem;
    margin-right: auto;
`

const TaskActions = styled.div`
    position: absolute;
    right: 1rem;
    display: flex;
    justify-content: end;
`

const TaskTitle = styled.h4`
    font-size: 1rem;
    text-align: left;
    margin: 0;

    color: ${props => props.theme.mainColor};
`

const TaskDescription = styled.h5`
    text-align: left;
    margin: 0;
    font-weight: normal;

    color: ${props => props.theme.mainColorAccent};
`

const TaskCategory = styled.h5`
    text-align: left;
    margin: 0;

    position: absolute;
    right: 1rem;
    top: 1rem;

    color: ${props => props.theme.mainColorAccent};
`

const TaskButton = styled(Button)`
    margin: 0 0 0 .5rem;
    padding: .5rem 1rem !important;
    display: none;
`

const TaskDelete = styled(TaskButton)`

`

const TaskComplete = styled(TaskButton)`
    margin: 0 0 0 auto;
    border-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.secondaryColor};

    &:is(:hover, :focus, :active):not(:disabled, [disabled])
    {
        background: linear-gradient(to right, ${props => props.theme.secondaryColor}, ${props => props.theme.secondaryColorAccent}) !important;
        box-shadow: 0 .5rem 1rem ${props => props.theme.secondaryColorShadow};
    }
`

const TaskEdit = styled(TaskButton)`
    filter: hue-rotate(-50deg) brightness(1.25);
`

const TaskDate = styled.div`
    color: ${props => props.theme.mainColor};
    font-weight: bold;
    margin: 0;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
`;

const TaskToggleComplete = styled.input`
    appearance: none;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.secondaryColorShadow};
    width: 1.5rem;
    height: 1.5rem;
    outline: none;
    box-shadow: inset 0 5px 10px ${props => props.theme.secondaryColorShadow};
    
    &:checked
    {
        background: linear-gradient(
            to bottom right,
            ${props => props.theme.secondaryColor},
            ${props => props.theme.secondaryColorShadow}
        );
        border-color: transparent;
    }
`

export const Task: React.FC<Props> = ({ task }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const context = useContext(TodoContext);

    const removeTask = React.useCallback(
        (task: ITask) => dispatch(context?.deleteTask({ task })),
        [dispatch, context?.deleteTask]
    )

    const updateTask = React.useCallback(
        (task: ITask) => dispatch(context?.editTask({ task })),
        [dispatch, context?.editTask]
    )

    const taskStatusLabel = !task?.complete ? 'O' : 'X';

    const editTask = React.useCallback(
        (task: ITask) => dispatch(setEditedTask({ task })),
        [dispatch, setEditedTask]
    )

    const stopEdittingTask = React.useCallback(
        (task: ITask) => dispatch(finishEditingTask({ task })),
        [dispatch, finishEditingTask]
    )

    const edit = (task: ITask) => {
        stopEdittingTask(task);
        editTask(task);
    }

    const TaskContainer = task?.complete ? TaskCompleteWrapper : TaskWrapper;

    const handleToggleComplete = (e: React.FormEvent<HTMLInputElement>) => {
        const value: boolean = e.currentTarget.checked;

        updateTask({ ...task, complete: value });
    };

    return <TaskContainer className="task" id={task?.id}>
        <TaskToggleComplete type="checkbox" onChange={handleToggleComplete} checked={task?.complete} />

        <TaskDetails>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskDescription>{task?.description}</TaskDescription>
            <TaskCategory>{task?.category}</TaskCategory>
            {
                task?.updated_at
                ? <TaskDate>
                    <span style={{
                        fontSize: '.85rem'
                    }}>Updated:</span>
                    {/* <DateLocale date={task?.updated_at */}
                    <TimeAgo time={task?.updated_at} />
                </TaskDate>
                : null
            }
        </TaskDetails>

        <TaskActions>
            <TaskComplete onClick={() => updateTask(
                { ...task, complete: !task?.complete, }
            )}>{taskStatusLabel}</TaskComplete>
            <TaskEdit onClick={() => edit(task)}>Edit</TaskEdit>
            <TaskDelete onClick={() => removeTask(task)}>Delete</TaskDelete>
        </TaskActions>
    </TaskContainer>
}

export default Task;