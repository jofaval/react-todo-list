import * as actionTypes from "./actionTypes"
import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from "redux";

const initialState: State = {
    taskReducer: {
        tasks: [],
        editedTask: undefined,
    },
    searchReducer: {
        searchedTask: '',
    },
    settingsReducer: {
        showComplete: true,
        importedState: undefined,
    },
}

export const taskReducer = (
    state: TaskState = initialState?.taskReducer,
    action: TaskAction
): TaskState => {
    // Get the current timestamp
    const now = new Date().getTime();

    switch (action.type) {
        case actionTypes.ADD_TASK:
            const newTask: ITask = { ...action.payload.task, id: uuidv4(), created_at: now, updated_at: now }

            return { ...state, tasks: state?.tasks?.concat(newTask), }
        case actionTypes.UPDATE_TASK:
            const editedTasks: ITask[] = state?.tasks?.map(
                task => {
                    if (task.id !== action.payload.task.id) return task;

                    return { ...task, ...action.payload.task, updated_at: now };
                }
            )

            return { ...state, tasks: editedTasks, }
        case actionTypes.REMOVE_TASK:
            const updatedTasks: ITask[] = state?.tasks.filter(
                task => task.id !== action.payload.task.id
            )

            return { ...state, tasks: updatedTasks, }
        case actionTypes.SET_EDITED_TASK:
            const targetId = action.payload.task.id;
            const taskToEdit: ITask|undefined = state?.tasks?.find(
                ({ id }) => id === targetId
            );

            return { ...state, editedTask: taskToEdit };
        case actionTypes.FINISH_EDITING_TASK:
            return { ...state, editedTask: undefined };
    }

    return state
}

// TODO: create edit reducer

export const searchReducer = (
    state: SearchState = initialState?.searchReducer,
    action: SearchAction
): SearchState => {
    switch (action.type) {
        case actionTypes.SET_SEARCHED_TASK:
            return { ...state, searchedTask: action.payload.value };
    }

    return state
}

export const settingsReducer = (
    state: SettingsState = initialState?.settingsReducer,
    action: SettingsAction
): SettingsState => {
    switch (action.type) {
        case actionTypes.TOGGLE_SHOW_COMPLETE:
            return { ...state, showComplete: action.payload.showComplete };
        case actionTypes.IMPORT_STATE:
            if (!action.payload.importedState) break;

            const newRawState = action.payload.importedState;
            const newParsedState = JSON.parse(newRawState);

            return { ...newParsedState };
    }

    return state
}

const rootReducer = combineReducers({
    taskReducer,
    searchReducer,
    settingsReducer
})

export default rootReducer;