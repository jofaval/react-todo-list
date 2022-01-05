import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"
import { reducer } from "src/context/reducer";

export const store: Store<TaskState, TaskAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));

export default store;