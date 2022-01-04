import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { addTask, removeTask } from "../../store/actionCreator";
import styled from "styled-components";
import { AddTask } from "../AddTask/AddTask";
import Task from "../Task/Task";
import TodoProvider from "../../context/TodoProvider";

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

    const renderTask = (task: ITask) =>
        <Task key={task.id} task={task} removeTask={removeTask}/>

    const shouldRenderTasks = tasks && tasks?.length

    return <TodoListStyle className="todo-list">
        <TodoProvider>
            <TasksTitle>Tasks</TasksTitle>

            <AddTask />
            
            {shouldRenderTasks
                ? tasks.map(renderTask)
                : 'No tasks were found.'}
        </TodoProvider>
    </TodoListStyle>
}

export default TodoList;