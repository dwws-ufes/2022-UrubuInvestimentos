import { useState } from "react";
import { BotaoGenerico } from "../../Componentes/BotaoGenerico";

import { Header, ProximoResultado, Resultado, Sidebar } from "../../Componentes";

import styles from "./index.module.css";
import CONTENTS from "../../Content/Pages/Suporte.json"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLinguagem } from "../../store/pageInfoSlice";

export const Suporte = () => {
	const [ showCadastro, setCadastro ] = useState(false);
	const [ showEntrar, setEntrar ] = useState(false);
    const [ sidebar, setSidebar ] = useState(false);

    const Contents = CONTENTS[useSelector(selectLinguagem)];

    return(
        <div className={styles.suporte}>
            <Header
                abreCadastro={ () => {setCadastro(true)}}
                fechaCadastro={() => {setCadastro(false);}}
                abreEntrar={() => {setEntrar(true);}}
                fechaEntrar={() => {setEntrar(false);}}
                toggleSidebar={() => setSidebar(anterior => !anterior)}
            />
            
            <main>
                {sidebar && <div className={styles.sidebar}><Sidebar/></div>}

                <div className={styles.topicos}>
                    <h1>{ Contents.Title }</h1>
                    
                    <div>
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
                        { Contents.Contacts.Content.map((element) => {
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
                    <BotaoGenerico className={styles.botao_suporte} texto="Novo Investimento"/>
                </div>
            </main>
        </div>
    );
}
