import { useState } from "react";
import { BotaoGenerico } from "../../Componentes/BotaoGenerico";

import { Header, ProximoResultado, Resultado, Sidebar } from "../../Componentes";

import Content from "../../Content/Pages/Suporte.json"
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { selectLogin, selectDropdown, selectEntrar, selectCadastro, selectSidebar } from "../../store/pageInfoSlice";
import { Entrar } from "../../Popups";
import { Cadastro } from "../Cadastro";
import { LoginDropdown } from "../../Popups/LoginDropdown";

export const Suporte = () => {
	const logado = useSelector(selectLogin);
	const showDropdown = useSelector(selectDropdown);
    const showEntrar = useSelector(selectEntrar);
    const showCadastro = useSelector(selectCadastro);
    const showSidebar = useSelector(selectSidebar);

    return(
        <div className={styles.suporte}>
            <Header/>
            
            <main>
                { showSidebar && <div className={styles.sidebar}><Sidebar/></div> }

                <div className={styles.topicos}>
                    <h1>{ Content.Title }</h1>
                    
                    <div>
                        <h2>{ Content.Questions.Title }</h2>
                        { Content.Questions.Content.map((element) => {
                            return (
                            <details>
                                <summary>{ element.Question }</summary>
                                <p>{ element.Answer }</p>
                            </details>
                            );
                        })
                        }
                    </div>

                    <div>
                        <h2>{ Content.Contacts.Title }</h2>
                        { Content.Contacts.Content.map((element) => {
                            return (
                            <div>{ element.Type }: { element.Data }</div>
                            );
                        })
                        }
                    </div>
                </div>
                
                <div className={styles.investimentos_sup}>
                    <ProximoResultado transparente={false}/>
                    <Resultado
                            src="imagens/animais/cagado.jpeg"
                            dia="ONTEM"
                            animal="CÁGADO"
                            milhares={["1234", "5678", "9012", "3456"]}
                    />
                    <Resultado
                            src="imagens/animais/cagado.jpeg"
                            dia="ONTEM"
                            animal="CÁGADO"
                            milhares={["1234", "5678", "9012", "3456"]}
                    />
                    <button
                        className={styles.botao_suporte}
                    >
                        Novo Investimento
                    </button>

                    { showEntrar && <Entrar/> }
                    { showCadastro && <Cadastro/> }
                    { showDropdown && <LoginDropdown/> }
                </div>
            </main>
        </div>
    );
}
