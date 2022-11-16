import React, { useState } from 'react';

//Importando as coisas do react-routers
import {
    BrowserRouter,
    Routes,
    Route 
} from 'react-router-dom';

//Importando as paginas
import { Inicial } from './Paginas/Inicial';

import './App.css';

const Home = () => {
    return(<h1>Cool bro</h1>);        
}

const Another = () => {
    return (<h1>Even cooler bro</h1>);        
}

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Inicial />}/>
                <Route path="blogs" element={<Another />} />
            </Routes>
        </BrowserRouter>
    );
}
