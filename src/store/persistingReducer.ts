import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from "./reducer";
import persistReducer from 'redux-persist/lib/persistReducer';

const persistConfig = {
    key: 'root',
    storage,
}

export const persistingReducer = persistReducer(persistConfig, rootReducer);

export default persistingReducer;