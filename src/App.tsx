import React from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import { theme } from './theme';
import styled, { ThemeProvider } from "styled-components"

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily}
`

function App() {
  return <ThemeProvider theme={theme}>
    <AppContainer className="App">
      <Todo />
    </AppContainer>
  </ThemeProvider>;
}

export default App;
