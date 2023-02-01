import { ProximoResultado } from "../";

import styles from "./index.module.css";
import Content from "../../Content/Components/MeusRendimentos.json"

interface propsType {
    totalInvestido: string;
    totalLucrado: string;
    saldo: string;
}

export const MeusRendimentos = (props: propsType) => {
        const { totalInvestido, totalLucrado, saldo } = props;

        return(
            <div className={styles.meus_rendimentos}>
            <div className={styles.proximo_resultado_div}>
                    <ProximoResultado transparente={false}/>
                    
                    <button className={styles.btn}>{ Content.Investment }</button>
                </div>
                <p className={styles.frase_motivacional}>
		    { Content.Motivational }
                </p>
                
                <div className={styles.informacoes_rendimentos}>
                    <h3>{ Content.Income.Title }</h3>
                    <p>{ Content.Income.Invested }: ${totalInvestido}</p>
                    <p>{ Content.Income.Profited }: ${totalLucrado}</p>
                    <p>{ Content.Income.Balance }: ${saldo}</p>
                </div>
                <button className={styles.btn}>{ Content.Withdraw }</button>
            </div>
        );
}
