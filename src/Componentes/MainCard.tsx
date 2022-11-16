import React from "react";

import { BotaoGenerico } from "./BotaoGenerico"

interface propsType {
    titulo: string;
    descricao: string;
}

export const MainCard = (props: propsType) => {
    const { titulo, descricao } = props;
    
    return(
        <div id="main-card">
            <h2>{titulo}</h2>
            <p>{descricao}</p>

            <BotaoGenerico
                texto="Cadastre-se"
                href="#"
                fundo={true}
                callback={() => null}
            />
        </div>
    );
}