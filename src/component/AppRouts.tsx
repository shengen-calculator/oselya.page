import * as React from 'react';
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../page/home/HomePage";
import ApplyPage from "../page/memberRequest/ApplyPage";
import LogIn from "../page/auth/LogIn";
import SignUp from "../page/auth/SignUp";

const AppRouts = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePage/>
        },
        {
            path: "/member-request",
            element: <ApplyPage/>
        },
        {
            path: "/login",
            element: <LogIn/>
        },
        {
            path: "/register",
            element: <SignUp/>
        }
    ]
);

export default AppRouts;