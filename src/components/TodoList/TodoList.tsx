import React from "react";
import { useSelector, shallowEqual } from "react-redux"
import styled from "styled-components";
import AddTask from "../AddTask/AddTask";
import Task from "../Task/Task";
import TodoProvider from "src/context/TodoProvider";

const TodoListStyle = styled.div`
    display: flex;
    flex-direction: column
`;

const TasksTitle = styled.h3 `
    margin: 0;
    color: ${props => props.theme.mainColor};
`

const NoTasksFound = styled.h2`
    color: ${props => props.theme.mainColor};
`

const TodoList: React.FC = () => {
    const tasks: readonly ITask[] = useSelector(
        (state: TaskState) => state?.tasks,
        shallowEqual
    )

    const renderTask = (task: ITask) => <Task key={task.id} task={task}/>

    const shouldRenderTasks = tasks && tasks?.length

    return <TodoListStyle className="todo-list">
        <TodoProvider>
            <TasksTitle>Tasks</TasksTitle>

            <AddTask />
            
            {shouldRenderTasks
                ? tasks.map(renderTask)
                : <NoTasksFound>No tasks were found.</NoTasksFound>}
        </TodoProvider>
    </TodoListStyle>
}

export default TodoList;