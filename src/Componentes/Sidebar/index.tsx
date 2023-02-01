import { Link } from "react-router-dom";

import { BotaoGenerico } from "../";
import { GanheDinheiro } from './GanheDinheiro';

import { FaMoneyCheckAlt } from 'react-icons/fa';

import styles from './index.module.css';

export const Sidebar = () => {
    return(
        <div className={styles.sidebar}>
            <div className={styles.parte_superior}>
                <a
                    className={styles.parceiro_oficial}
                    href="https://www.flamengo.com.br/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>Parceiro Oficial</p>
                    <img src="/imagens/flamengo-logo-2020.svg" alt="Logo do Flamengo" />
                </a>
                
                <GanheDinheiro />
                
                <button className={styles.investir_agora}>Investir agora!</button>
            </div>
            <div className={styles.links}>
                <ul>
                    <li>
                        <Link
                            className={styles.redirect}
                            to="/zumzumcapoeira"
                        >
                            INDIQUE UM AMIGO
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.redirect}
                            to="/regras"
                        >
                            REGRAS DE INVESTIMENTO
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.redirect}
                            to="/suporte"
                        >
                            SUPORTE AO VIVO
                        </Link>
                    </li>
                    <li>PERGUNTAS FREQUENTES</li>
                </ul>
            </div>
        </div>
    );
}
