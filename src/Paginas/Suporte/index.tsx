import { Header, ProximoResultado, Resultado, Sidebar } from "../../Componentes";

import styles from "./index.module.css";
import { selectDropdown, selectEntrar, selectCadastro, selectSidebar } from "../../store/pageInfoSlice";
import { Entrar } from "../../Popups";
import { Cadastro } from "../Cadastro";
import { LoginDropdown } from "../../Popups/LoginDropdown";
import CONTENTS from "../../Content/Pages/Suporte.json"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLinguagem } from "../../store/pageInfoSlice";

export const Suporte = () => {
	const showDropdown = useSelector(selectDropdown);
    const showEntrar = useSelector(selectEntrar);
    const showCadastro = useSelector(selectCadastro);
    const showSidebar = useSelector(selectSidebar);

    const Contents = CONTENTS[useSelector(selectLinguagem)];

    return(
        <div>
            <Header/>
            
            <div className={styles.suporte}>
                { showSidebar && <div className={styles.sidebar}><Sidebar/></div> }

                <main className={styles.main_content}>
                    <div className={styles.topicos}>
                        <h1>{ Contents.Title }</h1>
                        
                        <div className={styles.perguntas}>
                            <h2>{ Contents.Questions.Title }</h2>
                            { Contents.Questions.Content.map((element) => {
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
                            <h2>{ Contents.Contacts.Title }</h2>
                            { Contents.Contacts.Content.map((element, index) => {
                                return (
                                <div key={index}>{ element.Type }: { element.Data }</div>
                                );
                            })
                            }
                        </div>
                    </div>
                    <div className={styles.investimentos_sup}>
                        <ProximoResultado transparente={false}/>
                        <button
                            className={styles.botao_suporte}
                        >
                            Novo Investimento
                        </button>
                        <Resultado
                                src="imagens/animais/cagado.jpeg"
                                dia="ONTEM"
                                animal="CÁGADO"
                                milhares={["1234", "5678", "9012", "3456"]}
                        />
                    </div>
                </main>
            </div>

            { showEntrar && <Entrar/> }
            { showCadastro && <Cadastro/> }
            { showDropdown && <LoginDropdown/> }
        </div>
    );
}
