import React from "react";
import styled from "styled-components";
import TodoList from "../TodoList/TodoList";
import TodoSettings from "../TodoSettings/TodoSettings";

const Container = styled.main`
    padding: .5rem;
    // border: 1px solid black
`;

const Title = styled.h1`
    margin: 0;
    font-size: 24pt;
    color: ${props => props.theme.mainColor};
`;

const Subtitle = styled.h2`
    margin: 0;
    font-size: 16pt;
    color: ${props => props.theme.mainColorAccent};
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

        <TodoSettings />

        <TodoList />
    </Container>
}

export default Todo;