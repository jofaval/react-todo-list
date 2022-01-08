interface ITask extends Record<string,any> {
    id?: string
    title: string
    description?: string
    category?: string
    complete?: boolean
}

type TaskState = {
    tasks: ITask[]
    editedTask?: ITask,
    searchedTask?: string,
}

type TaskAction = {
    type: string
    task: ITask
}

type SearchAction = {
    type: string,
    value: string,
}

type Action = TaskAction | SearchAction;

type DispatchType = (args: Action) => Action

type TStore = Store<TaskState, Action>