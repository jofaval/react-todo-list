import { Action, AnyAction } from 'redux';
import { v4 as uuidv4 } from 'uuid';

interface TodoState {
    id?: string,
    title: string,
}

const initialState: TodoState[] = [
    {
        'id': '',
        'title': '',
    }
]

interface TaskAction extends Action {
    task: TodoState,
}

export const reducer = (state: any, action: TaskAction): any => {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                { ...action.task, id: uuidv4(), }
            ];
        default:
            return state;
    }
};