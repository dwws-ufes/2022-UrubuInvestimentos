import React from "react";

import { BotaoGenerico } from "../BotaoGenerico";
import { ResultadoInfo } from "../ResultadoInfo";
import { ProximoResultado } from "../ProximoResultado";


import "./index.css";

interface propsType {
    fotoSrc: string;
    animal: string;
    milhares: string[] | number[]
}

export const UltimoResultado = (props: propsType) => {
    const { fotoSrc, animal, milhares } = props;

    return(
        <div
            className="ultimo-resultado"
            style={{backgroundImage: `url(${fotoSrc})`}}
        >        
            {/*<img src="" alt="animal sorteado"/>*/}
            <ResultadoInfo
                animal={animal}
                milhares={milhares}
            />
            <div className="proximo-jogo">
                <ProximoResultado />
                <BotaoGenerico
                    texto="Novo Investimento"
                />
            </div>
        </div>
    );
}
