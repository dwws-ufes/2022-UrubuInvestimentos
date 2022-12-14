import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loga, desloga, selectLogin, selectNomeUsuario } from "../../store/loginSlice";
import { Link } from 'react-router-dom';

import { Dropdown } from "./Dropdown";
import { BotaoGenerico } from "../BotaoGenerico";
import { Logo } from '../Logo';

import { FaBars, FaRegUser } from 'react-icons/fa';

import "./index.css";

interface propsType {
    abreCadastro: () => void;
    fechaCadastro: () => void;
    abreEntrar: () => void;
    fechaEntrar: () => void;
    toggleSidebar?: () => void;
}

export const Header = (props: propsType) => {
    const { abreCadastro, fechaCadastro, abreEntrar, fechaEntrar } = props;
    
    // controla se eh mostrado login/entrar ou as informacoes do usuario
    
    // decide se o dropdown de opcoes de login eh mostrado ou nao
    const [ mostraDropDown, setMostraDropDown ] = useState(false);
    
    const logado = useSelector(selectLogin);
    const nomeUsuario = useSelector(selectNomeUsuario);
    const dispatch = useDispatch();

    return(
        <div className="header">

            <FaBars className="bar-icon" onClick={props?.toggleSidebar}/>

            <div className="header-centro">
                <Link className="link-home" to='/'>
                    <Logo />
                </Link>
            </div>
            
            {/* caso nao logado mostra botoes de logar, caso contrario mostra botoes de perfil */}
            {logado ?
                <div className="header-direito">
                    <p 
                        className="nome-usuario pop-up-opcoes-login"
                        onClick={() => setMostraDropDown(anterior => !anterior)}
                    >
                        {nomeUsuario}
                    </p>
                    
                    <FaRegUser
                        className="icone-usuario pop-up-opcoes-login"
                        onClick={() => setMostraDropDown(anterior => !anterior)}
                    />

                    { mostraDropDown && <Dropdown sair={() => dispatch(desloga())}/> }
                </div>
            :
                <div className="header-direito">
                    <BotaoGenerico
                        texto="Entrar"
                        href="#"
                        fundo={false}
                        callback={() => {
                            fechaCadastro();
                            abreEntrar();
                        }}
                        className="botao-header"
                    />
                    <BotaoGenerico
                        texto="Cadastre-se"
                        href="#"
                        fundo={true}
                        callback={() => {
                            fechaEntrar();
                            abreCadastro();
                        }}
                        className="botao-header"
                    />
                </div> 
            }
        </div>
    );
}
