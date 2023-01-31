import { configureStore } from "@reduxjs/toolkit";
import { loginReducer, userInfoReducer } from "./slices";

export const store = configureStore({
    reducer: {
        userInfo: userInfoReducer,
        login: loginReducer,
    }
});
