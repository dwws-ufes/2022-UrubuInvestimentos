import { createSlice } from "@reduxjs/toolkit";

interface stateType {
    logado: boolean;
    jogos: any[]
}

const initialState: stateType = {
    logado: true,
    jogos: [],
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loga: state => {state.logado = true},
        desloga: state => {state.logado = false},
        atualizaJogos: (state, action: any) => {
            return {
                ...state,
                state: action.value,
            };
        }
    }
});

export const { loga, desloga, atualizaJogos } = loginSlice.actions;

export const selectLogin = (state: any) => state.login.logado;
export const selectJogos = (state: any) => state.login.jogos;

export const loginReducer = loginSlice.reducer;