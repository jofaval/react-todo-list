interface ITask extends Record<string,any> {
    id?: string
    title: string
    description?: string
    category?: string
    complete?: boolean
    created_at?: int
    updated_at?: int
}

interface TaskState {
    tasks: ITask[]
    editedTask?: ITask,
}

interface SearchState {
    searchedTask?: string,
}

interface SettingsState {
    showComplete?: bool,
    importedState?: string
}

interface State {
    taskReducer: TaskState
    searchReducer: SearchState
    settingsReducer: SettingsState
};

interface Action {
    type: string
    payload: Object
}

interface TaskActionPayload {
    task: ITask
}

interface TaskAction extends Action {
    payload: TaskActionPayload
}

interface SearchActionPayload {
    value: string,
}

interface SearchAction extends Action {
    payload: SearchActionPayload
}

interface SettingsActionPayload {
    showComplete?: boolean
    importedState?: string
}

interface SettingsAction extends Action {
    type: string,
    payload: SettingsActionPayload,
}

type DispatchType = (args: Action) => Action

type TStore = Store<State, Action>