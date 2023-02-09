import React from "react";
import { Provider } from "react-redux";

//Importando as coisas do react-routers
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Importando a store do redux, que gerencia o estado global da aplicacao
import { store } from "./store";

// Importando as paginas
import { Inicial, Perfil, Cadastro, Regras, Suporte, Urubuzado, TelaInvestimentoNumero, Fauna } from "./Paginas";

import "./index.css";

export const App = () => {

    return (
    <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Inicial/>}/>
                    <Route path="/cadastro" element={<Cadastro/> }/>
                    <Route path="/perfil" element={<Perfil/>}/>
                    <Route path="/regras" element={<Regras/>}/>
                    <Route path="/suporte" element={<Suporte/>}/>
                    <Route path="/zumzumcapoeira" element={<Urubuzado/>}/>
                    <Route path="/tela-investimentos" element={<TelaInvestimentoNumero/>}/>
                    <Route path="/fauna" element={<Fauna/>}/>
                </Routes>
            </BrowserRouter>
    </Provider>
    );
}
