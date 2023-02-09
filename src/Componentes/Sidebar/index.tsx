import { Link, useNavigate } from "react-router-dom";

import { GanheDinheiro } from './GanheDinheiro';

import { FaMoneyCheckAlt } from 'react-icons/fa';

import styles from './index.module.css';
import { setEntrar, setCadastro, selectCadastro, selectDropdown, selectEntrar, selectLogin, selectSidebar } from "../../store/pageInfoSlice";
import { useSelector, useDispatch } from "react-redux";

export const Sidebar = () => {

    const showDropdown = useSelector(selectDropdown);
    const showEntrar = useSelector(selectEntrar);
    const showCadastro = useSelector(selectCadastro);
    const showSidebar = useSelector(selectSidebar);
    
    const logado = useSelector(selectLogin);

    const dispatch = useDispatch();

    const navigate = useNavigate();

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
                
                <GanheDinheiro/>
                
                <button
                    className={styles.investir_agora}
                    onClick={() => {
                        if(logado) {
                            dispatch(setEntrar(false));
                            dispatch(setCadastro(false));
                            navigate("/tela-investimentos");
                        }
                        else {
                            dispatch(setEntrar(true));
                        }
                    }}
                >
                    Investir agora!
                </button>
            </div>
            <div className={styles.links}>
                <ul>
                    <li>
                        <div
                            className={styles.redirect}
                            onClick={() => {
                                dispatch(setEntrar(false));
                                dispatch(setCadastro(false));
                                navigate("/zumzumcapoeira");
                            }}
                        >
                            INDIQUE UM AMIGO
                        </div>
                    </li>
                    <li>
                        <div
                            className={styles.redirect}
                            onClick={() => {
                                dispatch(setEntrar(false));
                                dispatch(setCadastro(false));
                                navigate("/regras");
                            }}        
                        >
                            REGRAS DE INVESTIMENTO
                        </div>
                    </li>
                    <li>
                        <div
                            className={styles.redirect}
                            onClick={() => {
                                dispatch(setEntrar(false));
                                dispatch(setCadastro(false));
                                navigate("/fauna");
                            }}        
                        >
                            FAUNA BRASILEIRA
                        </div>
                    </li>
                    <li>
                        <div
                            className={styles.redirect}
                            onClick={() => {
                                dispatch(setEntrar(false));
                                dispatch(setCadastro(false));
                                navigate("/suporte");
                            }}
                        >
                            SUPORTE
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
