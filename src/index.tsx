import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware, Store, Action } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './components/Loading/Loading';
import persistingReducer from './store/persistingReducer';
import { PersistPartial } from 'redux-persist/lib/persistReducer';

const store: Store<PersistPartial, Action<any>> & {
  dispatch: DispatchType
} = createStore(persistingReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
