import React from "react";
import { Provider } from "react-redux";

//Importando as coisas do react-routers
import {
    BrowserRouter,
    Routes,
    Route 
} from 'react-router-dom';

// Importando a store do redux, que gerencia o estado global da aplicacao
import { store } from "./store";


// Importando as paginas
import { Inicial } from "./Paginas/Inicial";
import { Perfil } from "./Paginas/Perfil";
import Cadastro from "./Paginas/Cadastro";
import Regras from "./Paginas/Regras";
import Suporte from "./Paginas/Suporte";
import Urubuzado from "./Paginas/Urubuzado";
import TelaInvestimentoNumero from "./Paginas/Tela-Investimentos-Numero";

import './App.css';

export const App = () => {
    return (
    <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Inicial/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                    <Route path="/perfil" element={<Perfil/>}/>
                    <Route path="/regras" element={<Regras/>}/>
                    <Route path="/suporte" element={<Suporte/>}/>
                    <Route path="/zumzumcapoeira" element={<Urubuzado/>}/>
                    <Route path="/tela-investimentos" element={<TelaInvestimentoNumero/>}/>
                </Routes>
            </BrowserRouter>
    </Provider>
    );
}
