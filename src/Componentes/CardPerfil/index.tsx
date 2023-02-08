import { FaRegUser, FaMoneyCheckAlt } from "react-icons/fa";

import styles from "./index.module.css";
import CONTENTS from "../../Content/Components/CardPerfil.json"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLinguagem} from "../../store/pageInfoSlice";

interface propsType {
    nome: string;
    saldo: number;
    investimentos: number | string;
}

export const CardPerfil = (props: propsType) => {

    const { nome, saldo, investimentos } = props;
    const Contents = CONTENTS[useSelector(selectLinguagem)];

    return(
        <div className={styles.card_perfil}>
            <div className={styles.parte_superior_perfil}>
                <FaRegUser className={styles.logo_perfil}/>
                <p>{nome}</p>
                <p>${`${saldo.toFixed(2)}`}</p>
            </div>
            <div className={styles.parte_meio_perfil}>
                <div>
                   <FaMoneyCheckAlt className={styles.icone_geral}/>
                   <p>{investimentos} { Contents.Investment }</p>
                </div>
            </div>
            <form className={styles.parte_inferior_perfil}>
                <input
                    placeholder="$0.00"
                    type="text"
                    inputMode="numeric"
                />
                
                <button
                    className={styles.btn}
                    type="submit"
                    onClick={e => {
                        e.preventDefault();
                    }}
                >
                    { Contents.Card }
                </button>
            </form>
                <div>
                </div>
	</div>
    );
}
