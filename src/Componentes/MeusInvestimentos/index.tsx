import { ProximoResultado, BotaoGenerico } from "../";

import styles from "./index.module.css";

interface investimento {
    dia: string;
    hora: string;
    animal: string;
    valor: string;
}

interface propsType {
    investimentos: investimento[] 
}

export const MeusInvestimentos = (props: propsType) => {
        const { investimentos } = props;

        return(
            <div className={styles.meus_investimentos}>
                <div className={styles.proximo_resultado_div}>
                    <ProximoResultado transparente={false}/>
                    <BotaoGenerico
                        texto="Novo Investimento"    
                    />
                </div>

                <p className={styles.frase_motivacional}>
                    Você sabia que estatisticamente 95% das pessoas viciadas em jogos de azar param antes de tirar a sorte grande?!!!
                </p>
                
                <div className={styles.informacoes_rendimentos}>
                    <h3>Meus Investimentos</h3>
                    
                    <div className={styles.div_investimentos}>
                        {investimentos.map((investimento, index) => {
                            const { dia, hora, animal, valor } = investimento;
                            return(
                                <div
                                    key={index}
                                    className={styles.investimento}
                                >
                                    <p>{dia.toUpperCase()} {hora}</p>
                                    <p>{animal} - ${valor}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <BotaoGenerico
                    texto="Sacar dinheiro"
                />
            </div>
        );
}
