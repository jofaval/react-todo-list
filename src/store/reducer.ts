import * as actionTypes from "./actionTypes"
import { v4 as uuidv4 } from 'uuid';

const initialState: TaskState = {
    tasks: [],
    editedTask: undefined,
}

const reducer = (
    state: TaskState = initialState,
    action: TaskAction
): TaskState => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            const newTask: ITask = { ...action.task, id: uuidv4(), }

            return { ...state, tasks: state.tasks.concat(newTask), }
        case actionTypes.UPDATE_TASK:
            const editedTasks: ITask[] = state.tasks.map(
                task => {
                    if (task.id !== action.task.id) return task;

                    return { ...task, ...action.task };
                }
            )

            return { ...state, tasks: editedTasks, }
        case actionTypes.REMOVE_TASK:
            const updatedTasks: ITask[] = state.tasks.filter(
                task => task.id !== action.task.id
            )

            return { ...state, tasks: updatedTasks, }
        case actionTypes.SET_EDITED_TASK:
            const targetId = action.task.id;
            const taskToEdit: ITask|undefined = state.tasks.find(
                ({ id }) => id === targetId
            );

            return { ...state, editedTask: taskToEdit };
        case actionTypes.FINISH_EDITING_TASK:
            return { ...state, editedTask: undefined };
    }
    return state
}

export default reducer