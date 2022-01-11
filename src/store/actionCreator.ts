import * as actionTypes from "./actionTypes"

export function addTask(payload: TaskActionPayload) {
  const action: TaskAction = {
    type: actionTypes.ADD_TASK,
    payload,
  }

  return createActionDispatcher(action)
}

export function updateTask(payload: TaskActionPayload) {
  const action: TaskAction = {
    type: actionTypes.UPDATE_TASK,
    payload,
  }

  return createActionDispatcher(action)
}

export function removeTask(payload: TaskActionPayload) {
  const action: TaskAction = {
    type: actionTypes.REMOVE_TASK,
    payload,
  }

  return createActionDispatcher(action)
}

export function setEditedTask(payload: TaskActionPayload) {
  const action: TaskAction = {
    type: actionTypes.SET_EDITED_TASK,
    payload,
  }

  return createActionDispatcher(action)
}

export function finishEditingTask(payload: TaskActionPayload) {
  const action: TaskAction = {
    type: actionTypes.FINISH_EDITING_TASK,
    payload,
  }

  return createActionDispatcher(action)
}

export function setSearchedTask(payload: SearchActionPayload) {
  const action: SearchAction = {
    type: actionTypes.SET_SEARCHED_TASK,
    payload,
  }

  return createActionDispatcher(action)
}

export function toggleShowComplete(payload: SettingsActionPayload) {
  const action: SettingsAction = {
    type: actionTypes.TOGGLE_SHOW_COMPLETE,
    payload,
  }

  return createActionDispatcher(action)
}

export function importState(payload: SettingsActionPayload) {
  const action: SettingsAction = {
    type: actionTypes.IMPORT_STATE,
    payload,
  }

  return createActionDispatcher(action)
}

export const createActionDispatcher = (action: Action) => {
  return (dispatch: DispatchType) => dispatch(action)
}