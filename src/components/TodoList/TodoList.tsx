import React from "react";
import styled from "styled-components";
import AddTask from "../AddTask/AddTask";
import TodoProvider from "src/context/TodoProvider";
import Tasks from "../Tasks/Tasks";

const TodoListStyle = styled.div`
    display: flex;
    flex-direction: column
`;

const TasksTitle = styled.h3 `
    margin: 0;
    color: ${props => props.theme.mainColor};
`

const TodoList: React.FC = () => {
    return <TodoListStyle className="todo-list">
        <TodoProvider>
            <TasksTitle>Tasks</TasksTitle>

            <Tasks />

            <AddTask />
        </TodoProvider>
    </TodoListStyle>
}

export default TodoList;