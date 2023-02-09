import { useEffect, useState } from "react";

import api from '../../services/api';

import { Header, Sidebar, CardPerfil, MeusInvestimentos } from "../../Componentes";
import { Cadastro, Entrar } from "../../Popups";
import { LoginDropdown } from "../../Popups/LoginDropdown";

import { useSelector, useDispatch } from "react-redux";
import { loga, desloga, selectLogin, selectDropdown, selectCadastro, selectEntrar, selectSidebar } from "../../store/pageInfoSlice";
import { selectInvestimentos, selectNomeUsuario, selectSaldo } from "../../store/userInfoSlice";

import styles from "./index.module.css";
import { investimento } from "../../Componentes/MeusInvestimentos/index.module.css";

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
        api.get('/tela-investimentos', {
            headers: {
                Authorization: investmentOwner,
            }
        }).then((response) => { setInvestments(response.data) });
    }, []);

    const logado = useSelector(selectLogin);
	const showDropdown = useSelector(selectDropdown);
    const showEntrar = useSelector(selectEntrar);
    const showCadastro = useSelector(selectCadastro);
    const showSidebar = useSelector(selectSidebar);
    
    const nomeUsuario = useSelector(selectNomeUsuario);
    const saldo = useSelector(selectSaldo);
    const investimentos = useSelector(selectInvestimentos)
    
    const dispatch = useDispatch();
    
    console.log("investimentos", investimentos)

	return (
		<div>
			<Header/>

            <main className={styles.main}>
                { showSidebar && <Sidebar/> }
                <section className={styles.conteudo_principal}>
                    <CardPerfil
                        nome={nomeUsuario}
                        saldo={saldo}
                        investimentos={10}
                    />
                    
                    <MeusInvestimentos
                        investimentos={investimentos}
                    />
                </section>
            </main> 
            
			{ showEntrar && <Entrar/> }
			{ showCadastro && <Cadastro/> }
            { showDropdown && <LoginDropdown/> }

		</div>
	);
}
