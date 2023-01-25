import { useState } from "react";
import { Header, Sidebar } from "../../Componentes";

import Contents from "../../Content/Content.json";
import "./index.css";

console.log(Contents.Rules.Title);
console.log(Contents.Rules.Content);

export const Regras = () => {
	const [ showCadastro, setCadastro ] = useState(false);
	const [ showEntrar, setEntrar ] = useState(false);
    const [ sidebar, setSidebar ] = useState(false);

    return(
        <div className="Regras">
            <Header
                abreCadastro={() => {setCadastro(true)}}
                fechaCadastro={() => {setCadastro(false);}}
                abreEntrar={() => {setEntrar(true);}}
                fechaEntrar={() => {setEntrar(false);}}
                toggleSidebar={() => setSidebar(anterior => !anterior)}
            />
            
            {sidebar && <div className="sidebar"><Sidebar/></div>}
            <h1>{Contents.Rules.Title}</h1>

            <p>{Contents.Rules.Content}</p>

            <img src="/imagens/img3.png" alt="Imagem ilustrativa"></img>
        </div>
    );
}