import { ProximoResultado } from "../";

import styles from "./index.module.css";
import CONTENTS from "../../Content/Components/MeusRendimentos.json"

interface propsType {
    totalInvestido: string;
    totalLucrado: string;
    saldo: string;
}

const Contents = CONTENTS["pt-Br"];

export const MeusRendimentos = (props: propsType) => {
        const { totalInvestido, totalLucrado, saldo } = props;

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
