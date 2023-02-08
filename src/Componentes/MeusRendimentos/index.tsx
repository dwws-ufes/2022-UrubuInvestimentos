import { ProximoResultado } from "../";

import styles from "./index.module.css";
import CONTENTS from "../../Content/Components/MeusRendimentos.json"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLinguagem } from "../../store/pageInfoSlice";

interface propsType {
    totalInvestido: string;
    totalLucrado: string;
    saldo: string;
}

export const MeusRendimentos = (props: propsType) => {
        const { totalInvestido, totalLucrado, saldo } = props;
        const Contents = CONTENTS[useSelector(selectLinguagem)];

        return(
            <div className={styles.meus_rendimentos}>
            <div className={styles.proximo_resultado_div}>
                    <ProximoResultado transparente={false}/>
                    
                    <button className={styles.btn}>{ Contents.Investment }</button>
                </div>
                <p className={styles.frase_motivacional}>
		    { Contents.Motivational }
                </p>
                
                <div className={styles.informacoes_rendimentos}>
                    <h3>{ Contents.Income.Title }</h3>
                    <p>{ Contents.Income.Invested }: ${totalInvestido}</p>
                    <p>{ Contents.Income.Profited }: ${totalLucrado}</p>
                    <p>{ Contents.Income.Balance }: ${saldo}</p>
                </div>
                <button className={styles.btn}>{ Contents.Withdraw }</button>
            </div>
        );
}
