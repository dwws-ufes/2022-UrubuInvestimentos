import { useState } from "react";
import { BotaoGenerico } from "../../Componentes/BotaoGenerico";

import { Header, ProximoResultado, Resultado, Sidebar } from "../../Componentes";

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
                    <h1>Suporte</h1>
                    
                    <div>
                        <h2>Perguntas Frequêntes</h2>
                        <details>
                            <summary>Pergunta 1</summary>
                            <p>Resposta extensa e bem completa pra pergunta 1.</p>
                        </details>
                        <details>
                            <summary>Pergunta 2</summary>
                            <p>Resposta extensa e bem completa pra pergunta 2.</p>
                        </details>
                        <details>
                            <summary>Pergunta 3</summary>
                            <p>Resposta extensa e bem completa pra pergunta 3.</p>
                        </details>
                    </div>

                    <div>
                        <h2>Contato</h2>

                        E-mail: aaaaa@bbbb.ccc<br/>
                        Telefone: +55 027 3333-3333<br/>
                        Whatsapp: +55 027 9 9999-9999<br/>
                    </div>
                </div>
                
                <div className='Investimentos-sup'>
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
                    <BotaoGenerico className="BotaoSuporte" texto="Novo Investimento"/>
                </div>
            </main>
        </div>
    );
}
