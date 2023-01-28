import { useState } from "react";

import { Header, Sidebar } from "../../Componentes";

import styles from "./index.module.css";

export const Regras = () => {
	const [ showCadastro, setCadastro ] = useState(false);
	const [ showEntrar, setEntrar ] = useState(false);
    const [ sidebar, setSidebar ] = useState(false);

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
                
                <div>
                    <h1>Regras de Investimento</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod consequuntur ullam quae doloribus enim optio cumque, placeat quibusdam veritatis illum sequi expedita ad est quia voluptates aliquam nam. Ut.</p>

                    <img src="/imagens/img3.png" alt="Imagem ilustrativa"></img>
                </div>
            </main>
        </div>
    );
}
