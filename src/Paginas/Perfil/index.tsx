import { useState } from "react";

import { Header, Sidebar, CardPerfil, MeusInvestimentos } from "../../Componentes";
import { Cadastro, Entrar } from "../../Popups";

import "./index.css";

export const Perfil = () => {

	const [ showCadastro, setCadastro ] = useState(false);
	const [ showEntrar, setEntrar ] = useState(false);
    const [ sidebar, setSidebar ] = useState(true)

	return (
		<div className="inicial">
			<Header
				abreCadastro={ () => {setCadastro(true)}}
                fechaCadastro={() => {setCadastro(false);}}
                abreEntrar={() => {setEntrar(true);}}
                fechaEntrar={() => {setEntrar(false);}}
                toggleSidebar={() => setSidebar(anterior => !anterior)}
			/>

            <main>
                { sidebar && <Sidebar/> }
                <section className="conteudo-principal">
                    <CardPerfil
                        nome="David Messias"
                        saldo="10,00"
                        investimentos={10}
                        lucrou="-100,00"
                        cartoes={["Cartão 1", "Cartão 2"]}
                    />
                    {/*
                    <MeusRendimentos
                        totalInvestido="120,00" 
                        totalLucrado="-100,00"
                        saldo="10,00"
                    />
                    */}
                    <MeusInvestimentos
                        investimentos={[
                        {dia: "HOJE", hora: "19:57", animal: "Tatú Bola", valor: "20,00"},
                        {dia: "HOJE", hora: "19:57", animal: "Tatú Bola", valor: "20,00"}
                    ]}
                    />
                </section>
            </main> 
            
			{ showEntrar && <Entrar fechaEntrar={() => {setEntrar(false);}}/>}
			{ showCadastro && <Cadastro fechaCadastro={() => {setCadastro(false);}}/> }

		</div>
	);
}
