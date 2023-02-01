import { createSlice } from "@reduxjs/toolkit";

interface loginType {
    logado: boolean;
    dropdown: boolean;
}

const loginInitialState: loginType  = {
    logado: false,
    dropdown: false,
};

export const loginSlice = createSlice({
    name: "login",
    initialState: loginInitialState,
    reducers: {
        logaPrimeiraVez: state => {
            state.logado = true;
        },
        desloga: state => {
            state.logado = false;
            state.dropdown = false;
        },
        setDropdown: (state, action) => {state.dropdown = action.payload},
    }
});

export const { logaPrimeiraVez, desloga, setDropdown } = loginSlice.actions;
export const selectLogin = (state: any) => state.login.logado;
export const selectDropdown = (state: any) => state.login.dropdown;

export const loginReducer = loginSlice.reducer;