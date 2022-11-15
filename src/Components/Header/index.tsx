import React, { useState } from "react";

import { Dropdown } from "./Dropdown";
import { BotaoGenerico } from "../BotaoGenerico";

import "./index.css";

interface propsType {
    className: string;
    abreCadastro: () => void;
    fechaCadastro: () => void;
    abreEntrar: () => void;
    fechaEntrar: () => void;
}

export const Header = (props: propsType) => {
    const { className, abreCadastro, fechaCadastro, abreEntrar, fechaEntrar } = props;
    
    // controla se eh mostrado login/entrar ou as informacoes do usuario
    const [ logado, setLogado ] = useState(true);
    
    // nome de usuario mostrado no header
    const [ nomeUsuario, setNomeUsuario ] = useState("David Messias");
    
    // decide se o dropdown de opcoes de login eh mostrado ou nao
    const [ mostraDropDown, setMostraDropDown ] = useState(true);

    return(
        <div id="header" className={className}>

            {/*<FontAwesomeIcon icon={faBars} id="bar-icon"/>*/}

            <div id="header-centro">
                <img src="/images/urubuzado.svg" alt="" className="Urubu-svg" id="logo"/>
                <h1 id="nome-empresa">Urubu Investimentos</h1>
            </div>
            
            {/* caso nao logado mostra botoes de logar, caso contrario mostra botoes de perfil */}
            {logado ?
                <div id="header-direito">
                    <p 
                        className="nome-usuario pop-up-opcoes-login"
                        onClick={() => setMostraDropDown(anterior => !anterior)}
                    >
                        {nomeUsuario}
                    </p>
                    
                    {/*<FontAwesomeIcon
                        icon={faUser}
                        className="icone-usuario pop-up-opcoes-login"
                        onClick={() => setMostraDropDown(anterior => !anterior)}
                    />*/}

                    { mostraDropDown && <Dropdown sair={() => {console.log("cool"); setLogado(false)}}/> }
                </div>
            :
                <div id="header-direito">
                    <BotaoGenerico
                        texto="Cadastre-se"
                        href="#"
                        fundo={true}
                        callback={() => {
                            fechaEntrar();
                            abreCadastro();
                        }}
                    />
                    <BotaoGenerico
                        texto="Entrar"
                        href="#"
                        fundo={false}
                        callback={() => {
                            fechaCadastro();
                            abreEntrar();
                        }}
                    />
                </div> 
            }
        </div>
    );
}
