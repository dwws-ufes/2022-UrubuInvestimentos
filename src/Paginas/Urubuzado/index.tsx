import { useNavigate } from 'react-router-dom';
import { BotaoGenerico } from '../../Componentes';

import styles from "./index.module.css";
import Content from "../../Content/Pages/Urubuzado.json"

export const Urubuzado = () => {
    const navigate = useNavigate()

    return(
        <div className={styles.urubuzado}>
            <h1>{ Content.Title }</h1>
            <p>{ Content.Content }</p>
            <button
                className={styles.botao}
                onClick={() => navigate("/")}
            >
                { Content.Button }
            </button>
        </div>
    );
}
