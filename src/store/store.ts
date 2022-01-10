import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"
import { reducer } from "src/context/reducer";

// TODO: reimplement this class properly
export const store: Store<any, any> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));

export default store;