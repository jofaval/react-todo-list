import { createStore, applyMiddleware, Store, Action } from "redux"
import thunk from "redux-thunk"
import { Config, createStateSyncMiddleware } from "redux-state-sync";
import { persistStore } from 'redux-persist'
import { PersistPartial } from 'redux-persist/lib/persistReducer';
import persistingReducer from "./persistingReducer";

export const configureStore = () => {
    // The redux state sync configuration
    const STATE_SYNC_CONFIG: Config = {
        channel: 'react_todo_list_channel',
    };
    
    // All the redux middlewares
    const storeMiddlewares = [
        createStateSyncMiddleware(STATE_SYNC_CONFIG),
        thunk,
    ];
    
    // Create the redux store
    const store: Store<PersistPartial, Action<any>> & {
        dispatch: DispatchType
    } = createStore(persistingReducer, applyMiddleware(...storeMiddlewares));
    
    // And it's corresponding persisto
    const persistor = persistStore(store);

    return { store, persistor };
};

export default () => configureStore();