import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";
import CONTENTS from "../../Content/Components/Logo.json"
const Contents = CONTENTS["pt-Br"];

export const Logo = () => {
    const navigate = useNavigate();

    return(
        <div
            className={styles.logo}
            onClick={() => navigate("/")}
        >
            <img
                src="imagens/urubuzado.svg"
                alt={ Contents.Alternative }
                className={styles.urubu_svg}
            />
            <h2 className={styles.nome_empresa}>{ Contents.Name }</h2>
        </div>
    );
}
