import React from "react";

import { BotaoGenerico } from "../BotaoGenerico";
import { GanheDinheiro } from './GanheDinheiro';

import { FaMoneyCheckAlt, FaCalendar } from 'react-icons/fa';

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
                    icone={<FaMoneyCheckAlt />}
                    href="#"
                    fundo={true}
                    callback={() => null}
                    className="botao"
                />

                <BotaoGenerico
                    texto="Jogos Passados"
                    icone={<FaCalendar />}
                    href="#"
                    fundo={true}
                    callback={() => null}
                    className="botao"
                />
            </div>
            <div className="links">
                <ul>
                    <li>INDIQUE UM AMIGO</li>
                    <li>REGRAS DE INVESTIMENTO</li>
                    <li>SUPORTE AO VIVO</li>
                    <li>PERGUNTAS FREQUENTES</li>
                </ul>
            </div>
        </div>
    );
}
