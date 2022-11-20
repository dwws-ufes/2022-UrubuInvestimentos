import React from "react";

import { BotaoGenerico } from "../BotaoGenerico";
import { Resultado } from "../Resultado";
import { ProximoResultado } from "../ProximoResultado";


import "./index.css";

interface propsType {
    fotoSrc: string;
}

export const UltimoResultado = (props: propsType) => {
    const { fotoSrc } = props;

    return(
        <div
            className="ultimo-resultado"
            style={{backgroundImage: `url(${fotoSrc})`}}
        >        
            {/*<img src="" alt="animal sorteado"/>*/}
            <Resultado
                animal="cágado"
                milhares={["1234", "4567", "8901", "2345"]}
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
