import { BotaoGenerico, ProximoResultado } from "../";
import { ResultadoInfo } from "./ResultadoInfo";

import styles from "./index.module.css";

interface propsType {
    fotoSrc: string;
    animal: string;
    dia: string;
    milhares: string [] | number[];
}

export const UltimoResultado = (props: propsType) => {
    let { fotoSrc, dia, animal, milhares } = props;

    if(milhares === undefined)
        milhares = [""];

    return(
        <div
            className={styles.ultimo_resultado}
            style={{backgroundImage: `url(${fotoSrc})`}}
        >        
            {/*<img src="" alt="animal sorteado"/>*/}
            <ResultadoInfo
                animal={animal}
                dia={dia}
                milhares={milhares}
            />
            <div className={styles.proximo_jogo}>
                <ProximoResultado />
                <BotaoGenerico
                    texto="Novo Investimento"
                />
            </div>
        </div>
    );
}
