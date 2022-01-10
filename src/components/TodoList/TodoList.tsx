import React from "react";
import styled from "styled-components";
import AddTask from "../AddTask/AddTask";
import TodoProvider from "src/context/TodoProvider";
import Tasks from "../Tasks/Tasks";
import SearchTasks from "../SearchTasks/SearchTasks";

const TodoListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${props => props.theme.maxResponsiveWidth};
    margin: auto;
`;

const TasksTitle = styled.h3 `
    margin: 0;
    color: ${props => props.theme.mainColor};
`

const TodoList: React.FC = () => {
    return <TodoListWrapper className="todo-list">
        <TodoProvider>
            <TasksTitle>Tasks</TasksTitle>

            <SearchTasks />
            <Tasks />

            <AddTask />
        </TodoProvider>
    </TodoListWrapper>
}

export default TodoList;