import { useState } from "react";

import { Header, Sidebar, CardPerfil, MeusInvestimentos } from "../../Componentes";
import { Cadastro, Entrar } from "../../Popups";
import { LoginDropdown } from "../../Popups/LoginDropdown";

import { useSelector, useDispatch } from "react-redux";
import { loga, desloga, selectLogin, selectDropdown } from "../../store/slices";
import { selectNomeUsuario, selectTotalDepositado, selectTotalInvestido, selectTotalLucrado } from "../../store/slices";

import styles from "./index.module.css";

export const Perfil = () => {

	const [ showCadastro, setCadastro ] = useState(false);
	const [ showEntrar, setEntrar ] = useState(false);
    const [ sidebar, setSidebar ] = useState(true);
    
    const logado = useSelector(selectLogin);
    const showDropdown = useSelector(selectDropdown);

    const nomeUsuario = useSelector(selectNomeUsuario);
    const totalDepositado = useSelector(selectTotalDepositado);
    const totalInvestido = useSelector(selectTotalInvestido);
    const totalLucrado = useSelector(selectTotalLucrado);
    const saldo = totalDepositado + totalLucrado - totalInvestido;
    
    const dispatch = useDispatch();

	return (
		<div>
			<Header
				abreCadastro={ () => {setCadastro(true)}}
                fechaCadastro={() => {setCadastro(false);}}
                abreEntrar={() => {setEntrar(true);}}
                fechaEntrar={() => {setEntrar(false);}}
                toggleSidebar={() => setSidebar(anterior => !anterior)}
			/>

            <main className={styles.main}>
                { sidebar && <Sidebar/> }
                <section className={styles.conteudo_principal}>
                    <CardPerfil
                        nome={nomeUsuario}
                        saldo={saldo}
                        investimentos={10}
                        lucrou={totalLucrado}
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
            { showDropdown && <LoginDropdown sair={() => {}}/> }

		</div>
	);
}
