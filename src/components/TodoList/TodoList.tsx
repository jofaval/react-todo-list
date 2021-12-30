import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { addTask, removeTask } from "../../store/actionCreator";
import styled from "styled-components";
import { AddTask } from "../AddTask/AddTask";
import Task from "../Task/Task";

const TodoListStyle = styled.div`
    display: flex;
    flex-direction: column
`;

const TasksTitle = styled.h3 `
    margin: 0;
`

const TodoList: React.FC = () => {
    const tasks: readonly ITask[] = useSelector(
        (state: TaskState) => state.tasks,
        shallowEqual
    )

    const dispatch: Dispatch<any> = useDispatch()

    const saveTask = React.useCallback(
        (task: ITask) => dispatch(addTask(task)),
        [dispatch]
    )

    return (
        <TodoListStyle className="todo-list">
            <TasksTitle>Tasks</TasksTitle>

            <AddTask saveTask={saveTask} />
            
            {tasks.map((task: ITask) => (
                <Task key={task.id} task={task} removeTask={removeTask}
                />
            ))}
        </TodoListStyle>
    )
}

export default TodoList;