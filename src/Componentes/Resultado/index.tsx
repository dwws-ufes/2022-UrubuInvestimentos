import { ResultadoInfoPequeno } from "../";

import "./index.css";

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
            className="resultado"
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
