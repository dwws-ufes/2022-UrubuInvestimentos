import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";
import Content from "../../Content/Components/Logo.json"

export const Logo = () => {
    const navigate = useNavigate();

    return(
        <div
            className={styles.logo}
            onClick={() => navigate("/")}
        >
            <img
                src="imagens/urubuzado.svg"
                alt={ Content.Alternative }
                className={styles.urubu_svg}
            />
            <h2 className={styles.nome_empresa}>{ Content.Name }</h2>
        </div>
    );
}
