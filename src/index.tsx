import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import MarketingPage from "./MarketingPage";
import type {} from '@mui/material/themeCssVarsAugmentation';
import SignUp from './SignUp';
import Checkout from "./Checkout";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
    <Checkout />
);
