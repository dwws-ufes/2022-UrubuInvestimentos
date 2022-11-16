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

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Inicial />}/>
                <Route path="blogs" element={<h1>Blogs</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
