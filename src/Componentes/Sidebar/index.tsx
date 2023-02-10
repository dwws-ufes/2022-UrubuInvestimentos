import { useNavigate } from "react-router-dom";

import { GanheDinheiro } from './GanheDinheiro';

import styles from './index.module.css';

import { setEntrar, setCadastro, selectLogin, selectSidebar } from "../../store/pageInfoSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectLinguagem } from "../../store/pageInfoSlice";
import CONTENTS from '../../Content/Components/Sidebar.json'

export const Sidebar = () => {
    
    const Contents = CONTENTS[useSelector(selectLinguagem)];
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
                    <p>{ Contents.Sponsors.Title }</p>
                    { Contents.Sponsors.Infos.map((element, index) => {
                        return (<img src={ element.src } alt={ element.alt } key={index} />)
                    })}
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
                    { Contents.DoInvestment }
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
                            { Contents.Friend }
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
                            { Contents.Rules }
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
                        {/* <div
                            className={styles.redirect}
                            onClick={() => {
                                dispatch(setEntrar(false));
                                dispatch(setCadastro(false));
                                navigate("/suporte");
                            }}
                        >
                            { Contents.Help }
                        </div> */}
                    </li>
                </ul>
            </div>
        </div>
    );
}
