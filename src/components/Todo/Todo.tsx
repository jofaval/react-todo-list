import React from "react";
import styled from "styled-components";
import TodoList from "../TodoList/TodoList";

const Container = styled.main`
    padding: .5rem;
    border: 1px solid black
`;

const Title = styled.h1`
    margin: 0;
    font-size: 24pt;
`;

const Subtitle = styled.h2`
    margin: 0;
    font-size: 16pt;
`;

/**
 * Main container of the Todo app
 * 
 * @returns {JSX.Element}
 */
export const Todo = (): JSX.Element => {
    return <Container id="todo-container">
        <Title>To-Do List</Title>
        <Subtitle>Creates tasks in a list</Subtitle>

        <TodoList />
    </Container>
}

export default Todo;