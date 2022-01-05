import React from "react";
import { Provider } from "react-redux";
import store from "./store";

interface ProviderProps {
    
}

export const ReduxProvider: React.FC = ({  }: ProviderProps) => {
    return <Provider store={store}>

    </Provider>
};

export default ReduxProvider;