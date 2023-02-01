import { Link } from "react-router-dom";

import { BotaoGenerico } from "../";
import { GanheDinheiro } from './GanheDinheiro';

import { FaMoneyCheckAlt } from 'react-icons/fa';

import './index.css';

export const Sidebar = () => {
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
                    texto="Investir agora!"
                    icone={<FaMoneyCheckAlt />}
                    href="#"
                    fundo={true}
                    callback={() => null}
                    className="botao"
                /> 
            </div>
            <div className="links">
                <ul>
                    <li><Link className="redirect" to="/zumzumcapoeira">INDIQUE UM AMIGO</Link></li>
                    <li><Link className="redirect" to="/regras">REGRAS DE INVESTIMENTO</Link></li>
                    <li><Link className="redirect" to="/suporte">SUPORTE</Link></li>
                </ul>
            </div>
        </div>
    );
}
