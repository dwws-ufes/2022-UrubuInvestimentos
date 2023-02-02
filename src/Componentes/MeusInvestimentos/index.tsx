import { ProximoResultado, BotaoGenerico } from "../";

import CONTENTS from "../../Content/Components/MeusInvestimentos.json"
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

const Contents = CONTENTS["pt-Br"];

export const MeusInvestimentos = (props: propsType) => {
        const { investimentos } = props;

        return(
            <div className={styles.meus_investimentos}>
                <div className={styles.proximo_resultado_div}>
                    <ProximoResultado transparente={false}/>
                    <BotaoGenerico
                        texto={ Contents.ButtonInvestement }
                    />
                </div>

                <p className={styles.frase_motivacional}> { Contents.Motivational } </p>
                
                <div className={styles.informacoes_rendimentos}>
                    <h3>{ Contents.Investment }</h3>
                    
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
                    texto={ Contents.ButtonWithdraw }
                />
            </div>
        );
}
