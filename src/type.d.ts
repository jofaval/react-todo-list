interface ITask {
    id?: string
    title: string
    complete?: boolean
}

type TaskState = {
    tasks: ITask[]
}

type TaskAction = {
    type: string
    task: ITask
}

type DispatchType = (args: TaskAction) => TaskAction