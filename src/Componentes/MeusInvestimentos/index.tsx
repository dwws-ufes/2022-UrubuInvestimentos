import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { ProximoResultado } from "../";

import CONTENTS from "../../Content/Components/MeusInvestimentos.json"
import { selectLinguagem } from "../../store/pageInfoSlice";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { ConfirmacaoSaque } from "../../Popups";
import { investimentosType } from "../../Utils/tipos"
import { selectInvestimentos } from "../../store/userInfoSlice";
    
export const MeusInvestimentos = () => {
    const Contents = CONTENTS[useSelector(selectLinguagem)];

    const navigate = useNavigate();

    const [ showSacarDinheiro, setSacarDinheiro ] = useState(false);
    
    const investimentos = useSelector(selectInvestimentos);
    
    useEffect(() => {

    }, [investimentos]);

    return(
        <div className={styles.meus_investimentos}>
            <div className={styles.proximo_resultado_div}>
                <ProximoResultado transparente={false}/>
                <button
                    className={styles.btn}
                    onClick={() => navigate("/tela-investimentos")}
                >
                    { Contents.ButtonInvestement }
                </button>
            </div>

            <p className={styles.frase_motivacional}> { Contents.Motivational } </p>
            
            <div className={styles.informacoes_rendimentos}>
                <h3>{ Contents.Investment }</h3>
                
                <div className={styles.div_investimentos}>
                    {[...investimentos].reverse().map((investimento: investimentosType, index: number) => {
                        const {
                            betType,
                            distribution,
                            gameIdAtual,
                            investmentId,
                            investmentOwner,
                            odds,
                            selectedNumber,
                            value
                        } = investimento;
                        return(
                            <div
                                key={index}
                                className={styles.investimento}
                            >
                                <p>{selectedNumber} - ${value},00</p>
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
                { Contents.ButtonWithdraw }
            </button>

            { showSacarDinheiro && <ConfirmacaoSaque fechar={() => setSacarDinheiro(false)}/> }

        </div>
    );
}
