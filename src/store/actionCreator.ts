import * as actionTypes from "./actionTypes"

export function addTask(task: ITask) {
  const action: TaskAction = {
    type: actionTypes.ADD_TASK,
    task,
  }

  return createActionDispatcher(action)
}

export function updateTask(task: ITask) {
  const action: TaskAction = {
    type: actionTypes.UPDATE_TASK,
    task,
  }

  return createActionDispatcher(action)
}

export function removeTask(task: ITask) {
  const action: TaskAction = {
    type: actionTypes.REMOVE_TASK,
    task,
  }

  return createActionDispatcher(action)
}

export const createActionDispatcher = (action: TaskAction) => {
  return (dispatch: DispatchType) => dispatch(action)
}