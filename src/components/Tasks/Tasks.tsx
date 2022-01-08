import React from "react";
import { useSelector, shallowEqual } from "react-redux"
import styled from "styled-components";
import Task from "../Task/Task";

const TasksContainer = styled.div`
    max-width: ${props => props.theme.maxResponsiveWidth};
    width: 100%;
    margin: auto;
`

const NoTasksFound = styled.h2`
    color: ${props => props.theme.mainColor};
`

export const Tasks: React.FC = ({ ...props }) => {
    const tasks: readonly ITask[] = useSelector(
        (state: State) => state.taskReducer.tasks,
        shallowEqual
    )

    const searchedTask: string|undefined = useSelector(
        (state: State) => state.searchReducer.searchedTask,
        shallowEqual
    )

    // Filter the tasks only if there's a task to search
    const renderableTasks = !searchedTask ? tasks : tasks
        .filter(({ title }) => title.includes(searchedTask ? searchedTask : ''));

    const renderTask = (task: ITask) => <Task key={task?.id} task={task}/>

    const shouldRenderTasks = renderableTasks && renderableTasks?.length
    if (shouldRenderTasks) return <TasksContainer className="tasks">
        {renderableTasks.map(renderTask)}
    </TasksContainer>;

    return <NoTasksFound>No tasks were found.</NoTasksFound>;
};

export default Tasks;