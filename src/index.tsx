import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import type {} from '@mui/material/themeCssVarsAugmentation';
import AppRouts from "./component/AppRouts";
import configureStore from "./redux/configureStore";
import initialState from "./redux/reducers/initialState";
import {PersistGate} from "redux-persist/integration/react";
import AppTheme from "./shared-theme/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);
const {store, persistent} = configureStore(initialState);

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistent} loading={null}>
            <AppTheme>
                <CssBaseline enableColorScheme/>
                <RouterProvider router={AppRouts}/>
            </AppTheme>
        </PersistGate>
    </Provider>
);
