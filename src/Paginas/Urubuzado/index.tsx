import { useNavigate } from 'react-router-dom';
import { BotaoGenerico } from '../../Componentes';

import styles from "./index.module.css";

export const Urubuzado = () => {
    const navigate = useNavigate()

    return(
        <div className={styles.urubuzado}>
            <h1>ERROR 420</h1>
            <p>Você BUGOU o Site. Crie outra conta para continuar investindo :&#41; 😅.</p>
            <button
                className={styles.botao}
                onClick={() => navigate("/")}
            >
                Voltar para a página inicial
            </button>
        </div>
    );
}
