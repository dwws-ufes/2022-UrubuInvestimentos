import { useState } from "react";
import { BotaoGenerico } from "../../Componentes/BotaoGenerico";

import { Header, ProximoResultado, Resultado, Sidebar } from "../../Componentes";

import Content from "../../Content/Pages/Suporte.json"
import "./index.css";

export const Suporte = () => {
	const [ showCadastro, setCadastro ] = useState(false);
	const [ showEntrar, setEntrar ] = useState(false);
    const [ sidebar, setSidebar ] = useState(false);

    return(
        <div className="Suporte">
            <Header
                abreCadastro={ () => {setCadastro(true)}}
                fechaCadastro={() => {setCadastro(false);}}
                abreEntrar={() => {setEntrar(true);}}
                fechaEntrar={() => {setEntrar(false);}}
                toggleSidebar={() => setSidebar(anterior => !anterior)}
            />
            
            <main>
                {sidebar && <div className="sidebar"><Sidebar/></div>}

                <div className="Topicos">
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
                
                <div className='Investimentos-sup'>
                    <ProximoResultado/>
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
                    <BotaoGenerico className="BotaoSuporte" texto="Novo Investimento"/>
                </div>
            </main>
        </div>
    );
}