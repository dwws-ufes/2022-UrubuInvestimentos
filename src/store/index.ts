import { configureStore } from "@reduxjs/toolkit";
import { userInfoReducer } from "./userInfoSlice";
import { loginReducer } from "./loginSlice";

export const store = configureStore({
    reducer: {
        userInfo: userInfoReducer,
        login: loginReducer,
    }
});
