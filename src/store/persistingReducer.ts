import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from "./reducer";
import { combineReducers } from 'redux';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
    key: 'root',
    storage,
}

export const persistingReducer = persistReducer(persistConfig, rootReducer);

export default persistingReducer;