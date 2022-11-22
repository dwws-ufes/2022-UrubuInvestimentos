import React from "react";

//Importando as coisas do react-routers
import {
    BrowserRouter,
    Routes,
    Route 
} from 'react-router-dom';

//Importando as paginas
import { Inicial } from "./Paginas/Inicial";
import { Perfil } from "./Paginas/Perfil";
import Cadastro from "./Paginas/Cadastro";
import Regras from "./Paginas/Regras";

import './App.css';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Inicial/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/regras" element={<Regras/>}/>
            </Routes>
        </BrowserRouter>
    );
}
