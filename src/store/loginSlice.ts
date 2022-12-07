import { createSlice } from "@reduxjs/toolkit";

interface stateType {
    logado: boolean;
    nomeUsuario: string;
}

const initialState: stateType = {
    logado: false,
    nomeUsuario: "",
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loga: state => {state.logado = true},
        desloga: state => {state.logado = false},
        setaNomeUsuario: (state, action) => {state.nomeUsuario = action.payload}
    }
});

export const { loga, desloga, setaNomeUsuario } = loginSlice.actions;

export const selectLogin = (state: any) => state.login.logado;
export const selectNomeUsuario = (state: any) => state.login.nomeUsuario;

export const loginReducer = loginSlice.reducer;