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
}

type TaskAction = {
    type: string
    task: ITask
}

type DispatchType = (args: TaskAction) => TaskAction