import React, { useState } from "react";

import { Header } from "../../Componentes/Header";
import { Sidebar } from "../../Componentes/Sidebar";
import { UltimoResultado } from "../../Componentes/UltimoResultado";
import { Searchbar } from "../../Componentes/Searchbar";
import { Resultado } from "../../Componentes/Resultado";

import { Cadastro } from "../../Popups/Cadastro"
import { Entrar } from "../../Popups/Entrar";

import "./index.css";

export const Inicial = () => {

	const [ showCadastro, setCadastro ] = useState(false);
	const [ showEntrar, setEntrar ] = useState(false);
    const [ sidebar, setSidebar ] = useState(true)

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

	return (
		<div className="inicial">
			<Header
				abreCadastro={abreCadastro}
				fechaCadastro={fechaCadastro}
				abreEntrar={abreEntrar}
				fechaEntrar={fechaEntrar}
                toggleSidebar={() => setSidebar(anterior => !anterior)}
			/>

            <main>
                { sidebar && <Sidebar /> }
                <section className="conteudo-principal-inicial">
                   <UltimoResultado
                        fotoSrc="imagens/animais/cagado.jpeg"
                        animal={"cágado"}
                        milhares={["1234", "4567", "8901", "2345"]}
                    />
                   <Searchbar />
                   <div className="resultados-anteriores">
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

                        <Resultado
							src="imagens/animais/cagado.jpeg"
							dia="ONTEM"
							animal="CÁGADO"
							milhares={["1234", "5678", "9012", "3456"]}
						/>
                   </div>
                </section>
            </main> 
            
			{ showEntrar && <Entrar fechaEntrar={fechaEntrar}/>}
			{ showCadastro && <Cadastro fechaCadastro={fechaCadastro}/> }

		</div>
	);
}
