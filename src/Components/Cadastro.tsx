import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/sharp-solid-svg-icons";

import { BotaoGenerico } from './BotaoGenerico';

interface propsType {

}

export const Cadastro = (props: propsType) => {
    return(
        <div id="cadastro">
            <img src="./images/cadastro.svg" alt="cadastro" />
            <div id="cadastro-info">
                <form action="">
                    <input type="text" name="email" placeholder="Endereço de Email"/>
                    <input type="text" name="senha" placeholder="Senha"/>
                    <input type="number" name="idade" placeholder="Idade"/>

                    <BotaoGenerico texto="Começe já" href="#" fundo={true}/>
                </form>
            </div>
        <FontAwesomeIcon icon={faXmark} id="cadastro-x"/>
        </div>
    );
}