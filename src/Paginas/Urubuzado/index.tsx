import { useNavigate } from 'react-router-dom';
import { BotaoGenerico } from '../../Componentes';

import styles from "./index.module.css";
import CONTENTS from "../../Content/Pages/Urubuzado.json"
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectLinguagem } from '../../store/pageInfoSlice';

export const Urubuzado = () => {
    const navigate = useNavigate()
    const Contents = CONTENTS[useSelector(selectLinguagem)];

    return(
        <div className={styles.urubuzado}>
            <h1>{ Contents.Title }</h1>
            <p>{ Contents.Content }</p>
            <button
                className={styles.botao}
                onClick={() => navigate("/")}
            >
                { Contents.Button }
            </button>
        </div>
    );
}
