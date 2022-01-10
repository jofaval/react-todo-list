interface ITask extends Record<string,any> {
    id?: string
    title: string
    description?: string
    category?: string
    complete?: boolean
    created_at?: int
    updated_at?: int
}

type TaskState = {
    tasks: ITask[]
    editedTask?: ITask,
}

type SearchState = {
    searchedTask?: string,
}

type SettingsState = {
    showComplete?: bool,
}

type State = {
    taskReducer: TaskState
    searchReducer: SearchState
    settingsReducer: SettingsState
};

type TaskAction = {
    type: string
    task: ITask
}

type SearchAction = {
    type: string,
    value: string,
}

type SettingsActionPayload = {
    showComplete?: boolean
}

type SettingsAction = {
    type: string,
    payload: SettingsActionPayload,
}

type Action = TaskAction | SearchAction | SettingsAction;

type DispatchType = (args: Action) => Action

type TStore = Store<State, Action>