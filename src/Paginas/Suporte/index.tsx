import { useState } from "react";

import { Header } from "../../Componentes/Header";
import { Sidebar } from "../../Componentes/Sidebar";

import "./index.css";

export default function Suporte(){
	const [ showCadastro, setCadastro ] = useState(false);
	const [ showEntrar, setEntrar ] = useState(false);
    const [ sidebar, setSidebar ] = useState(false)

	const fechaCadastro = () => {
		setCadastro(false);
	}

	const abreCadastro = () => {
		setCadastro(true);
	}

	const fechaEntrar = () => {
		setEntrar(false);
	}

	const abreEntrar = () => {
		setEntrar(true);
	}
    return(
        <div className="Regras">
            <Header
                abreCadastro={abreCadastro}
                fechaCadastro={fechaCadastro}
                abreEntrar={abreEntrar}
                fechaEntrar={fechaEntrar}
                toggleSidebar={() => setSidebar(anterior => !anterior)}
            />
            {sidebar && <div className="sidebar"><Sidebar/></div>}

            <div>
                <h1>Suporte</h1>

                <ul className="Topicos">
                    <li>
                        <h2>Perguntas Frequêntes</h2>
                        <ul>
                            <li>
                                <h3>Pergunta 1</h3>
                                <p>Resposta extensa e bem completa pra pergunta 1.</p>
                            </li>
                            <li>
                                <h3>Pergunta 2</h3>
                            </li>
                            <li>
                                <h3>Pergunta 3</h3>
                            </li>
                        </ul>
                    </li>
                    <li>
                    <h2>Contato</h2>
                    </li>
                </ul>

            </div>
        </div>
    );
}