import { useNavigate } from "react-router-dom";
import { ProximoResultado } from "../";

import Content from "../../Content/Components/MeusInvestimentos.json"
import styles from "./index.module.css";
import { useState } from "react";
import { ConfirmacaoSaque } from "../../Popups";

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

    const navigate = useNavigate();

    const [ showSacarDinheiro, setSacarDinheiro ] = useState(false);

    return(
        <div className={styles.meus_investimentos}>
            <div className={styles.proximo_resultado_div}>
                <ProximoResultado transparente={false}/>
                <button
                    className={styles.btn}
                    onClick={() => navigate("/tela-investimentos")}
                >
                    { Content.ButtonInvestement }
                </button>
            </div>

            <p className={styles.frase_motivacional}> { Content.Motivational } </p>
            
            <div className={styles.informacoes_rendimentos}>
                <h3>{ Content.Investment }</h3>
                
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

            <button
                className={styles.btn}
                onClick={() => {
                    setSacarDinheiro(!showSacarDinheiro);
                }}
            >
                { Content.ButtonWithdraw }
            </button>

            { showSacarDinheiro && <ConfirmacaoSaque fechar={() => setSacarDinheiro(false)}/> }
        </div>
    );
}
