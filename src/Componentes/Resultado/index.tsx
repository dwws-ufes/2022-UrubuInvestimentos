import { ResultadoInfoPequeno } from "./ResultadoInfoPequeno";

import styles from "./index.module.css";

interface propsType {
    src: string;
    dia: string;
    animal: string;
    milhares: string[] | number[] 
}

export const Resultado = (props: propsType) => {
    const { src, dia, animal, milhares } = props;

    return(
        <div
            className={styles.resultado}
            style={{backgroundImage: `url(${src})`}}
        >
            <ResultadoInfoPequeno
                dia={dia}
                animal={animal}
                milhares={milhares}
            />            
        </div>
    );
}
