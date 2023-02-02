import { processaData } from "../../../Utils/processaData";

import styles from "./index.module.css";
import CONTENTS from "../../../Content/Components/UltimoResultado.json"

const Contents = CONTENTS['pt-Br'];

// Espera-se receber um dia no formato DD/MM/AAAA
interface propsType {
    animal: string;
    dia: string,
    milhares: string[] | number[];
}

export const ResultadoInfo = (props: propsType) => {
    const { animal, dia, milhares } = props;

    const diaProcessado = processaData(dia);

    return(
        <div className={styles.resultado_info}>
            <p className={styles.ultimo_jogo}>{ Contents.Infos }</p>
            <p className={styles.data}>{diaProcessado}</p>
            <h3 className={styles.animal}>{animal.toUpperCase()}!</h3>
            
            <div className={styles.numeros}>
                {milhares.map((milhar, index) => 
                    <p
                        key={index}
                        className={styles.milhar}
                    >
                        {milhar}
                    </p>
                )}
            </div>
        </div>
    );
}
