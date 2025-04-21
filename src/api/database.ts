import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFunctions} from "firebase/functions";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const functions = getFunctions(app, "");