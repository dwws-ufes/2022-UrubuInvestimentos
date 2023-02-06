import { useState } from "react";
import { Header, Sidebar } from "../../Componentes";
import { LoginDropdown } from "../../Popups/LoginDropdown";

import { useSelector } from "react-redux";
import { selectDropdown, selectLinguagem } from "../../store/pageInfoSlice";
import styles from "./index.module.css";
import CONTENTS from "../../Content/Pages/Regras.json";

export const Regras = () => {
	const [ showCadastro, setCadastro ] = useState(false);
	const [ showEntrar, setEntrar ] = useState(false);
    const [ sidebar, setSidebar ] = useState(false);

    const showDropdown = useSelector(selectDropdown);
    const Contents = CONTENTS[useSelector(selectLinguagem)];

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
