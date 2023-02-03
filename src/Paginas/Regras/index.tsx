import { useState } from "react";
import { Header, Sidebar } from "../../Componentes";
import { LoginDropdown } from "../../Popups/LoginDropdown";

import { useSelector, useDispatch } from "react-redux";
import { loga, desloga, selectLogin, selectDropdown, selectSidebar, selectCadastro, selectEntrar } from "../../store/pageInfoSlice";
import { selectNomeUsuario, selectSaldo } from "../../store/userInfoSlice";

import styles from "./index.module.css";
import Contents from "../../Content/Pages/Regras.json";
import { Entrar } from "../../Popups";
import { Cadastro } from "../Cadastro";

export const Regras = () => {
	const logado = useSelector(selectLogin);
	const showDropdown = useSelector(selectDropdown);
    const showEntrar = useSelector(selectEntrar);
    const showCadastro = useSelector(selectCadastro);
    const showSidebar = useSelector(selectSidebar);

    return(
        <div className={styles.regras}>
            <Header/>
            
            <main className={styles.main}>
                {showSidebar && <Sidebar/>}
                
                <div className={styles.conteudo_principal}>
		    <h1>{Contents.Title}</h1>
		    <p>{Contents.Content}</p>
                    <img src="/imagens/img3.png" alt="Imagem ilustrativa"></img>
                </div>
            </main>

            { showEntrar && <Entrar/> }
			{ showCadastro && <Cadastro/> }
            { showDropdown && <LoginDropdown/> }
        </div>
    );
}
