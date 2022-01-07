import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addTask, updateTask, removeTask } from "../store/actionCreator";

interface ITodoContext {
    saveTask: (task: ITask | any) => void,
    editTask: (task: ITask | any) => void,
    deleteTask: (task: ITask | any) => void,
}

export const TodoContext = React.createContext<ITodoContext | null>(null);

export const TodoProvider: React.FC = ({ children, ...props }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const saveTask = React.useCallback(
        (task: ITask) => dispatch(addTask(task)),
        [dispatch, addTask]
    );
    const editTask = React.useCallback(
        (task: ITask) => dispatch(updateTask(task)),
        [dispatch, updateTask]
    );
    const deleteTask = React.useCallback(
        (task: ITask) => dispatch(removeTask(task)),
        [dispatch, removeTask]
    );

    const defaultState = { saveTask, editTask, deleteTask, }

    return <TodoContext.Provider value={defaultState}>
        {children}
    </TodoContext.Provider>
}

export default TodoProvider;