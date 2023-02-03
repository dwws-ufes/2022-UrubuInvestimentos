import { configureStore } from "@reduxjs/toolkit";
import { userInfoReducer } from "./userInfoSlice";
import { pageInfoReducer } from "./pageInfoSlice";

export const store = configureStore({
    reducer: {
        userInfo: userInfoReducer,
        pageInfo: pageInfoReducer,
    }
});