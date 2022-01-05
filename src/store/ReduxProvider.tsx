import React from "react";
import { Provider } from "react-redux";
import store from "./store";

export const ReduxProvider: React.FC = ({ children, ...props }) => {
    return <Provider store={store}>
        {children}
    </Provider>
};

export default ReduxProvider;