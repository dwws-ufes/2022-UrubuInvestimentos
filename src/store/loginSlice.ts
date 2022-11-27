import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logado: true,
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loga: state => {state.logado = true},
        desloga: state => {state.logado = false}
    }
});

export const { loga, desloga } = loginSlice.actions;

export const selectLogin = (state: any) => state.login.logado;

export const loginReducer = loginSlice.reducer;
