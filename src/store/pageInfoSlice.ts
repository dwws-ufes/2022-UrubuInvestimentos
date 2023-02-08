import { createSlice } from "@reduxjs/toolkit";

interface pageInfoType {
    logado: boolean;
    dropdown: boolean;
    entrar: boolean;
    cadastro: boolean;
    sidebar: boolean;
    search: string;
    linguagem: number;
}

const pageInfoInitialState: pageInfoType  = {
    logado: false,
    dropdown: false,
    entrar: false,
    cadastro: false,
    sidebar: true,
    search: "",
    linguagem: 0,
};

export const pageInfoSlice = createSlice({
    name: "pageInfo",
    initialState: pageInfoInitialState,
    reducers: {
        loga: state => {
            state.logado = true;
        },
        desloga: state => {
            state.logado = false;
            state.dropdown = false;
        },
        setDropdown: (state, action) => {state.dropdown = action.payload},
        setCadastro: (state, action) => {state.cadastro = action.payload},
        setEntrar: (state, action) => {state.entrar = action.payload},
        setSidebar: (state, action) => {state.sidebar = action.payload},
        setSearch: (state, action) => {state.search = action.payload},
        setLinguagem: (state, action) => { state.linguagem = action.payload },
    }
});

export const { loga, desloga, setDropdown, setCadastro, setEntrar, setSidebar, setSearch, setLinguagem } = pageInfoSlice.actions;

export const selectLogin = (state: any) => state.pageInfo.logado;
export const selectDropdown = (state: any) => state.pageInfo.dropdown;
export const selectCadastro = (state: any) => state.pageInfo.cadastro;
export const selectEntrar = (state: any) => state.pageInfo.entrar;
export const selectSidebar = (state: any) => state.pageInfo.sidebar;
export const selectSearch = (state: any) => state.pageInfo.search;
export const selectLinguagem = (state: any) => state.pageInfo.linguagem;

export const pageInfoReducer = pageInfoSlice.reducer;