import { BotaoGenerico, ResultadoInfo, ProximoResultado } from "../";

import "./index.css";

interface propsType {
    fotoSrc: string;
    animal: string;
    milhares: string [] | number[];
}

export const UltimoResultado = (props: propsType) => {
    let { fotoSrc, animal, milhares } = props;

    if(milhares === undefined)
        milhares = [""];

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
