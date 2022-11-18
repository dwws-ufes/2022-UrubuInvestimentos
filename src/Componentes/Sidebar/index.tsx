import React from "react";

import { BotaoGenerico } from "../BotaoGenerico";
import { GanheDinheiro } from './GanheDinheiro';

import './index.css';

interface propsType {

}

export const Sidebar = (props: propsType) => {
    return(
        <div className="sidebar">
            <div className="parte-superior">
                <a
                    className="parceiro-oficial"
                    href="https://www.flamengo.com.br/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>Parceiro Oficial</p>
                    <img src="/imagens/flamengo-logo-2020.svg" alt="Logo do Flamengo" />
                </a>
                
                <GanheDinheiro />

                <BotaoGenerico
                    texto="Invista agora!"
                    href="#"
                    fundo={true}
                    callback={() => null}
                />

                <BotaoGenerico
                    texto="Jogos Passados"
                    href="#"
                    fundo={true}
                    callback={() => null}
                />
            </div>
            <div className="links">
                <ul>
                    <li>INDIQUE UM</li>
                    <li>REGRAS DE INVESTIMENTO</li>
                    <li>SUPORTE AO VIVO</li>
                    <li>PERGUNTAS FREQUENTES</li>
                </ul>
            </div>
        </div>
    );
}
