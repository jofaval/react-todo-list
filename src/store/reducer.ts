import * as actionTypes from "./actionTypes"
import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from "redux";

const initialState: TaskState = {
    tasks: [],
    editedTask: undefined,
    searchedTask: '',
}

export const taskReducer = (
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

export const searchReducer = (
    state: TaskState = initialState,
    action: SearchAction
): TaskState => {
    switch (action.type) {
        case actionTypes.SET_SEARCHED_TASK:
            return { ...state, searchedTask: action.value };
    }

    return state
}

const rootReducer = combineReducers({
    taskReducer,
    searchReducer
})

export default rootReducer;