import { useState } from "react";
import { Header, Sidebar } from "../../Componentes";
import { LoginDropdown } from "../../Popups/LoginDropdown";

import { useSelector, useDispatch } from "react-redux";
import { loga, desloga, selectLogin, selectDropdown } from "../../store/slices";
import { selectNomeUsuario, selectTotalDepositado, selectTotalInvestido, selectTotalLucrado } from "../../store/slices";
import styles from "./index.module.css";
import Contents from "../../Content/Pages/Regras.json";

export const Regras = () => {
	const [ showCadastro, setCadastro ] = useState(false);
	const [ showEntrar, setEntrar ] = useState(false);
    const [ sidebar, setSidebar ] = useState(false);

    const showDropdown = useSelector(selectDropdown);

    return(
        <div className={styles.regras}>
            <Header
                abreCadastro={() => {setCadastro(true)}}
                fechaCadastro={() => {setCadastro(false);}}
                abreEntrar={() => {setEntrar(true);}}
                fechaEntrar={() => {setEntrar(false);}}
                toggleSidebar={() => setSidebar(anterior => !anterior)}
            />
            
            <main className={styles.main}>
                {sidebar && <Sidebar/>}
                
                <div className={styles.conteudo_principal}>
		    <h1>{Contents.Title}</h1>
		    <p>{Contents.Content}</p>
                    <img src="/imagens/img3.png" alt="Imagem ilustrativa"></img>
                </div>
            </main>

            { showDropdown && <LoginDropdown sair={() => {}}/> }
        </div>
    );
}
