import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import type {} from '@mui/material/themeCssVarsAugmentation';
import AppRouts from "./component/AppRouts";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
    <RouterProvider router={AppRouts}/>
);
