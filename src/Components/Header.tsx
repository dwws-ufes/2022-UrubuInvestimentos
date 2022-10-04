import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { BotaoGenerico } from "./BotaoGenerico"

interface propsType {
    className: string;
    abreCadastro: () => void;
    fechaCadastro: () => void;
    abreEntrar: () => void;
    fechaEntrar: () => void;
}

export const Header = (props: propsType) => {
    const { className, abreCadastro, fechaCadastro, abreEntrar, fechaEntrar } = props;

    return(
        <div id="header" className={className}>

            <FontAwesomeIcon icon={faBars} id="bar-icon"/>

            <div id="header-centro">
                <img src="/images/urubuzado.svg" alt="" className="Urubu-svg" id="logo"/>
                <h1 id="nome-empresa">Urubu Investimentos</h1>
            </div>

            <div id="header-direito">
                <BotaoGenerico
                    texto="Cadastre-se"
                    href="https://google.com"
                    fundo={true}
                    callback={() => {
                        fechaEntrar();
                        abreCadastro();
                    }}
                />
                <BotaoGenerico
                    texto="Entrar"
                    href="https://blaze.com/pt/games/crash"
                    fundo={false}
                    callback={() => {
                        fechaCadastro();
                        abreEntrar();
                    }}
                />
            </div>
        </div>
    );
}