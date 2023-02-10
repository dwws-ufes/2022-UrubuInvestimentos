import { createSlice } from "@reduxjs/toolkit";
import { userInfoType } from "../Utils/tipos";

const userInfoInitialState: userInfoType = {
    email: "",
    senha: "",
    nomeUsuario: "",
    saldo: 0,
    investimentos: [],
    cartoes: [],
};

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: userInfoInitialState,
    reducers: {
        setEmail: (state, action) => {state.email = action.payload},
        setSenha: (state, action) => {state.senha = action.payload},
        setNomeUsuario: (state, action) => {state.nomeUsuario = action.payload},
        setSaldo: (state, action) => {state.saldo = action.payload},
        adicionaInvestimento: (state, action) => {state.investimentos.push(action.payload)},
        setInvestimentos: (state, action) => {state.investimentos = action.payload},
        adicionaCartao: (state, action) => {state.cartoes.push(action.payload)}
    }
});

export const {  setEmail,
                setSenha,
                setNomeUsuario,
                setSaldo,
                adicionaInvestimento,
                setInvestimentos,
                adicionaCartao,
            } = userInfoSlice.actions;

export const selectEmail = (state: any) => state.userInfo.email;
export const selectSenha = (state: any) => state.userInfo.senha;
export const selectNomeUsuario = (state: any) => state.userInfo.nomeUsuario;
export const selectSaldo = (state: any) => state.userInfo.saldo;
export const selectInvestimentos = (state: any) => state.userInfo.investimentos;
export const selectCartoes = (state: any) => state.userInfo.cartoes;

export const userInfoReducer = userInfoSlice.reducer;
