import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import MarketingPage from "./MarketingPage";
import type {} from '@mui/material/themeCssVarsAugmentation';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
    <MarketingPage />
);
