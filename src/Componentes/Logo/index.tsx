import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

export const Logo = () => {
    const navigate = useNavigate();

    return(
        <div
            className={styles.logo}
            onClick={() => navigate("/")}
        >
            <img
                src="imagens/urubuzado.svg"
                alt="logo urubu"
                className={styles.urubu_svg}
            />
            <h2 className={styles.nome_empresa}>Urubu Investimentos</h2>
        </div>
    );
}
