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

    const showComplete: boolean|undefined = useSelector(
        (state: State) => state?.settingsReducer?.showComplete !== false,
        shallowEqual
    )

    const renderableTasks = tasks
        .filter((task: ITask) => {
            const { title } = task;

                // Filter the tasks only if there's a task to search
                if (searchedTask) {
                    const isSearched = title.toLowerCase().includes(searchedTask.toLowerCase());

                    if (!isSearched) return false;
                }

                // If completes should be hided, do so
                if (!showComplete && (task?.complete && task.complete)) return false;

                return true;
        });

    const renderTask = (task: ITask) => <Task key={task?.id} task={task}/>

    const shouldRenderTasks = renderableTasks && renderableTasks?.length
    if (shouldRenderTasks) return <TasksContainer className="tasks">
        {renderableTasks.map(renderTask)}
    </TasksContainer>;

    // If a search criteria was given, change the Not Found text
    if (searchedTask) return <NoTasksFound>No tasks were found with the given search criteria.</NoTasksFound>;

    return <NoTasksFound>No tasks were found.</NoTasksFound>;
};

export default Tasks;