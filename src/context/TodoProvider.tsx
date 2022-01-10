import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addTask, updateTask, removeTask } from "../store/actionCreator";

interface ITodoContext {
    saveTask: (payload: TaskActionPayload | any) => void,
    editTask: (payload: TaskActionPayload | any) => void,
    deleteTask: (payload: TaskActionPayload | any) => void,
}

export const TodoContext = React.createContext<ITodoContext | null>(null);

export const TodoProvider: React.FC = ({ children, ...props }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const saveTask = React.useCallback(
        (payload: TaskActionPayload) => dispatch(addTask(payload)),
        [dispatch, addTask]
    );
    const editTask = React.useCallback(
        (payload: TaskActionPayload) => dispatch(updateTask(payload)),
        [dispatch, updateTask]
    );
    const deleteTask = React.useCallback(
        (payload: TaskActionPayload) => dispatch(removeTask(payload)),
        [dispatch, removeTask]
    );

    const defaultState = { saveTask, editTask, deleteTask, }

    return <TodoContext.Provider value={defaultState}>
        {children}
    </TodoContext.Provider>
}

export default TodoProvider;