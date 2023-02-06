import { useEffect, useState } from "react";

import api from '../../services/api';

import { Header, Sidebar, CardPerfil, MeusInvestimentos } from "../../Componentes";
import { Cadastro, Entrar } from "../../Popups";
import { LoginDropdown } from "../../Popups/LoginDropdown";

import { useSelector, useDispatch } from "react-redux";
import { selectLogin, selectDropdown } from "../../store/pageInfoSlice";
import { selectNomeUsuario, selectSaldo } from "../../store/userInfoSlice";

import styles from "./index.module.css";

interface investimentsType {
    investimentId: string;
    investmentOwner: string;
    selectedNumber: string;
    betType: string;
    distribution: string;
    value: number;
    odds: number;
    gameId: number;
}

export const Perfil = () => {
    const investmentOwner = localStorage.getItem('profileId');

    const initialInvestment: investimentsType[] = [{
        investimentId: "",
        investmentOwner: "",
        selectedNumber: "",
        betType: "",
        distribution: "",
        value: 0,
        odds: 0,
        gameId: 0,
    }];
    
    const [ investments, setInvestments ] = useState(initialInvestment);

    useEffect(() => {
        console.log("useEffect do perfil chamado")
        api.get('/tela-investimentos', {
            headers: {
                Authorization: investmentOwner,
            }
        }).then((response) => { console.log(response);setInvestments(response.data) });
    }, []);

	const [ showCadastro, setCadastro ] = useState(false);
	const [ showEntrar, setEntrar ] = useState(false);
    const [ sidebar, setSidebar ] = useState(true);
    
    const logado = useSelector(selectLogin);
    const showDropdown = useSelector(selectDropdown);

    const nomeUsuario = useSelector(selectNomeUsuario);
    const saldo = useSelector(selectSaldo);
    
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
                        lucrou={0}
                        cartoes={["Cartão 1", "Cartão 2"]}
                    />
                    
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
