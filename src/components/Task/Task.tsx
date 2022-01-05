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
    box-shadow: 0 4px 10px rgba(0,0,0,.1)
`

const TaskDetails = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const TaskTitle = styled.h4`
    font-size: 1rem;
`

const TaskDelete = styled(Button)`
    margin-left: auto;
`

export const Task: React.FC<Props> = ({ task }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const context = useContext(TodoContext);

    const removeTask = React.useCallback(
        (task: ITask) => dispatch(context?.deleteTask(task)),
        [dispatch, context?.deleteTask]
    )

    return (
        <TaskWrapper className="Task">
            <TaskDetails>
                <TaskTitle>{task.title}</TaskTitle>
                <p>{task.complete ? 'Done' : 'To-Do'}</p>
            </TaskDetails>

            <TaskDelete onClick={() => removeTask(task)}>Delete</TaskDelete>
        </TaskWrapper>
    )
}

export default Task;