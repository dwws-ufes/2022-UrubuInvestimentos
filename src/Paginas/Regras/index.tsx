import React, { useState } from "react";

import { Header } from "../../Componentes/Header";
import { Sidebar } from "../../Componentes/Sidebar";

import { Cadastro } from "../../Popups/Cadastro"
import { Entrar } from "../../Popups/Entrar";

import "./index.css";

export default function Regras(){
	const [ showCadastro, setCadastro ] = useState(false);
	const [ showEntrar, setEntrar ] = useState(false);
    const [ sidebar, setSidebar ] = useState(false)

	const fechaCadastro = () => {
		setCadastro(false);
	}

	const abreCadastro = () => {
		setCadastro(true);
	}

	const fechaEntrar = () => {
		setEntrar(false);
	}

	const abreEntrar = () => {
		setEntrar(true);
	}
    return(
        <div className="Regras">
            <Header
                abreCadastro={abreCadastro}
                fechaCadastro={fechaCadastro}
                abreEntrar={abreEntrar}
                fechaEntrar={fechaEntrar}
                toggleSidebar={() => setSidebar(anterior => !anterior)}
            />
            
            {sidebar && <div className="sidebar"><Sidebar/></div>}
            <h1>Regras de Investimento</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod consequuntur ullam quae doloribus enim optio cumque, placeat quibusdam veritatis illum sequi expedita ad est quia voluptates aliquam nam. Ut.</p>

            <img src="/imagens/img3.png" alt="Imagem ilustrativa"></img>
        </div>
    );
}