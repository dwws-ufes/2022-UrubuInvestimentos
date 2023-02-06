import { BotaoGenerico, ProximoResultado } from "../";
import { ResultadoInfo } from "./ResultadoInfo";

import styles from "./index.module.css";
import CONTENTS from "../../Content/Components/UltimoResultado.json"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLinguagem } from "../../store/pageInfoSlice";


interface propsType {
    fotoSrc: string;
    animal: string;
    dia: string;
    milhares: string [] | number[];
}

export const UltimoResultado = (props: propsType) => {
    const Contents = CONTENTS[useSelector(selectLinguagem)];
    
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
                <ProximoResultado transparente={true}/>
                <BotaoGenerico
                    texto={ Contents.Investment }
                />
            </div>
        </div>
    );
}
