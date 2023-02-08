import { useNavigate } from "react-router-dom";

import "./index.module.css";
import styles from "./index.module.css";
import { CgClose } from "react-icons/cg";
import CONTENTS from '../../Content/Popups/ConfirmarSaque.json'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLinguagem } from "../../store/pageInfoSlice";
interface propsType {
    fechar: () => void;
}

export const ConfirmacaoSaque = (props: propsType) => {
    const { fechar } = props;

    const navigate = useNavigate();
    const Contents = CONTENTS[useSelector(selectLinguagem)];

    return(
        <div className={styles.confirmacao_saque_pop_up}>
            <p>{ Contents.Withdrawal1 }
            <br/>
            { Contents.Withdrawal2 }</p>

            <div className={styles.botoes_confirmacao_saque}>
                <button
                    className={styles.btn_nao}
                    onClick={fechar}
                >
                    { Contents.Investing }
                </button>
                <button
                    className={styles.btn_sim}
                    onClick={() => {
                        navigate("/zumzumcapoeira");
                    }}
                >
                    { Contents.Yes }
                </button>
            </div>

            <CgClose
                className={styles.x}
                onClick={fechar}
            />
        </div>
    );
}
