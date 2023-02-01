import { ProximoResultado } from "../";

import styles from "./index.module.css";

interface propsType {
    totalInvestido: string;
    totalLucrado: string;
    saldo: string;
}

export const MeusRendimentos = (props: propsType) => {
        const { totalInvestido, totalLucrado, saldo } = props;

        return(
            <div className={styles.meus_rendimentos}>
            asdlfgjkasdkfjgaksjhdgfkjagsdgkajhsdgfaskjdhgfskahd    
            <div className={styles.proximo_resultado_div}>
                    <ProximoResultado transparente={false}/>
                    
                    <button className={styles.btn}>Novo Investimento</button>
                </div>
                <p className={styles.frase_motivacional}>
                    Você sabia que estatisticamente 95% das pessoas viciadas em jogos de azar param antes de tirar a sorte grande?!!! asdflkhjasdhf
                </p>
                
                <div className={styles.informacoes_rendimentos}>
                    <h3>Meus Rendimentos</h3>

                    <p>Total investido: ${totalInvestido}</p>
                    <p>Total lucrado: ${totalLucrado}</p>
                    <p>Saldo: ${saldo}</p>
                </div>
                
                <button className={styles.btn}>Sacar dinheiro</button>
            </div>
        );
}
