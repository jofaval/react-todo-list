import React, { useState, FC } from "react";

import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import styled from "styled-components";
import Button from "../Buttons/Button/Button";

type Props = {
    task: ITask
    removeTask: (task: ITask) => void
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

    &:is(:hover, :focus) {
        background: black !important;
        color: white !important;
    }
`

export const Task: React.FC<Props> = ({ task, removeTask }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const deleteTask = React.useCallback(
        (task: ITask) => dispatch(removeTask(task)),
        [dispatch, removeTask]
    )

    return (
        <TaskWrapper className="Task">
            <TaskDetails>
                <TaskTitle>{task.title}</TaskTitle>
                <p>{task.complete ? 'Done' : 'To-Do'}</p>
            </TaskDetails>

            <TaskDelete onClick={() => deleteTask(task)}>Delete</TaskDelete>
        </TaskWrapper>
    )
}

export default Task;