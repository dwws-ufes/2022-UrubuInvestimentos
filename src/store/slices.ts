import { createSlice } from "@reduxjs/toolkit";

interface loginType {
    logado: boolean;
    dropdown: boolean;
}

interface userInfoType {
    nomeUsuario: string;
    totalDepositado: number;
    totalInvestido: number;
    totalLucarado: number;
}

const loginInitialState: loginType  = {
    logado: true,
    dropdown: false,
};

const userInfoInitialState: userInfoType = {
    nomeUsuario: "Barão de Mauá",
    totalDepositado: 0,
    totalInvestido: 0,
    totalLucarado: 0,
};

export const loginSlice = createSlice({
    name: "login",
    initialState: loginInitialState,
    reducers: {
        loga: state => {state.logado = true},
        desloga: state => {
            state.logado = false;
            state.dropdown = false;
        },
        setDropdown: (state, action) => {state.dropdown = action.payload},
    }
});

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: userInfoInitialState,
    reducers: {
        setNomeUsuario: (state, action) => {state.nomeUsuario = action.payload},
        setTotalDepositado: (state, action) => {state.totalDepositado = action.payload},
        setTotalInvestido: (state, action) => {state.totalInvestido = action.payload},
        setTotalLucrado: (state, action) => {state.totalLucarado = action.payload},
    }
});

export const { loga, desloga, setDropdown } = loginSlice.actions;
export const selectLogin = (state: any) => state.login.logado;
export const selectDropdown = (state: any) => state.login.dropdown;

export const { setNomeUsuario, setTotalDepositado, setTotalInvestido, setTotalLucrado } = userInfoSlice.actions;
export const selectNomeUsuario = (state: any) => state.userInfo.nomeUsuario;
export const selectTotalDepositado = (state: any) => state.userInfo.totalDepositado;
export const selectTotalInvestido = (state: any) => state.userInfo.totalInvestido;
export const selectTotalLucrado = (state: any) => state.userInfo.totalLucarado;

export const loginReducer = loginSlice.reducer;
export const userInfoReducer = userInfoSlice.reducer;
