import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";
import CONTENTS from "../../Content/Components/Logo.json"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLinguagem } from "../../store/pageInfoSlice";

export const Logo = () => {
    const navigate = useNavigate();
    const Contents = CONTENTS[useSelector(selectLinguagem)];

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
