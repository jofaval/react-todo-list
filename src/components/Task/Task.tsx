import React, { useContext } from "react";

import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import styled from "styled-components";
import Button from "../Buttons/Button/Button";
import { TodoContext } from "src/context/TodoProvider";

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

    position: relative;

    &:is(:hover, :focus, :active) {
        button {
            display: block;
        }
    }

    &:is(.complete) {
        // border-color: ${props => props.theme.secondaryColor};
        box-shadow: 0 0px 25px ${props => props.theme.secondaryColorShadow};
        border-width: 4px;
        border-image: linear-gradient(
            ${props => props.theme.mainColorShadow},
            ${props => props.theme.secondaryColorShadow}
        ) 2;
    }
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

export const Task: React.FC<Props> = ({ task }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const context = useContext(TodoContext);

    const removeTask = React.useCallback(
        (task: ITask) => dispatch(context?.deleteTask(task)),
        [dispatch, context?.deleteTask]
    )

    const updateTask = React.useCallback(
        (task: ITask) => dispatch(context?.editTask(task)),
        [dispatch, context?.editTask]
    )

    const taskStatusLabel = !task?.complete ? 'O' : 'X';

    return <TaskWrapper className={'Task ' + task?.complete && task.complete ? 'complete' : ''}>
        <TaskDetails>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskDescription>{task?.description}</TaskDescription>
            <TaskCategory>{task?.category}</TaskCategory>
        </TaskDetails>

        <TaskActions>
            <TaskComplete onClick={() => updateTask({
                ...task,
                complete: !task?.complete,
            })}>{taskStatusLabel}</TaskComplete>
            <TaskDelete onClick={() => removeTask(task)}>Delete</TaskDelete>
        </TaskActions>
    </TaskWrapper>
}

export default Task;