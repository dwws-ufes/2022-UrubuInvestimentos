import { useDispatch, useSelector } from "react-redux";
import { BotaoGenerico, ProximoResultado } from "../";
import { ResultadoInfo } from "./ResultadoInfo";

import styles from "./index.module.css";
import { selectDropdown, selectEntrar, selectCadastro, selectSidebar, setEntrar, selectLogin, setCadastro } from "../../store/pageInfoSlice";
import { Navigate, useNavigate } from "react-router-dom";

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

    const showDropdown = useSelector(selectDropdown);
    const showEntrar = useSelector(selectEntrar);
    const showCadastro = useSelector(selectCadastro);
    const showSidebar = useSelector(selectSidebar);
    
    const logado = useSelector(selectLogin);

    const dispatch = useDispatch();

    const navigate = useNavigate();
        
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
                <button
                    className={styles.btn}
                    onClick={() => {
                        if(logado) {
                            dispatch(setEntrar(false));
                            dispatch(setCadastro(false));
                            navigate("/tela-investimentos");
                        }
                        else {
                            dispatch(setEntrar(true));
                        }
                    }}
                >
                    Novo Investimento
                </button>
            </div>
        </div>
    );
}
