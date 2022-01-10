import React, { ReactNode } from "react";

import { Provider } from "react-redux"

import { PersistGate } from 'redux-persist/integration/react'
import Loading from "src/components/Loading/Loading";
import { configureStore } from "src/store/store";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { initStateWithPrevTab } from "redux-state-sync";

const { store, persistor } = configureStore();

// Start the syncing process with the previous open tab, if exists
initStateWithPrevTab(store);

export const AppWrapper: React.FC = ({ children }) => {

    return <ErrorBoundary>
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <React.StrictMode>
                    {children}
                </React.StrictMode>
            </PersistGate>
        </Provider>
    </ErrorBoundary>;
};

export default AppWrapper;