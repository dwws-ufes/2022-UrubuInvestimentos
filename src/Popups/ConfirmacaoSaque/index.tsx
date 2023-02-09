import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";
import { CgClose } from "react-icons/cg";
import { setEntrar } from "../../store/pageInfoSlice";

interface propsType {
    fechar: () => void;
}

export const ConfirmacaoSaque = (props: propsType) => {
    const { fechar } = props;

    const navigate = useNavigate();

    return(
        <div className={styles.confirmacao_saque_pop_up}>
            <p>Tem certeza que deseja sacar este dinheiro?
            <br/>
            Você não poderá utilizá-lo para futuros investimentos :(</p>

            <div className={styles.botoes_confirmacao_saque}>
                <button
                    className={styles.btn_nao}
                    onClick={fechar}
                >
                    Continuar Investindo!!!
                </button>
                <button
                    className={styles.btn_sim}
                    onClick={() => {
                        navigate("/zumzumcapoeira");
                    }}
                >
                    Sim
                </button>
            </div>

            <CgClose
                className={styles.x}
                onClick={fechar}
            />
        </div>
    );
}
