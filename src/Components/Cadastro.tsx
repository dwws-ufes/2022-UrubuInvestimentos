import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/sharp-solid-svg-icons";

import { BotaoGenerico } from './BotaoGenerico';
import { Logo } from './Logo'

interface propsType {

}

export const Cadastro = (props: propsType) => {
    return(
        <div id="cadastro">
            <img src="./images/cadastro.svg" alt="cadastro" />

            <div id="cadastro-info">
                <Logo />
                <h3>Cadastre-se no Urubu Investimentos</h3>
                
                <form action="">
                    <input type="text" name="email" placeholder="Endereço de Email"/>
                    <input type="text" name="senha" placeholder="Senha"/>
                    <input type="number" name="idade" placeholder="Idade"/>

                    <p>Ao se inscrever, você concorda com os <a href=".logo">Termos de serviço</a>.</p>

                    <BotaoGenerico texto="Começe já" href="#" fundo={true}/>
                </form>

                <p>Já é um investidor? <a href=".logo">Entre</a>.</p>
            </div>
        <FontAwesomeIcon icon={faXmark} id="cadastro-x"/>
        </div>
    );
}