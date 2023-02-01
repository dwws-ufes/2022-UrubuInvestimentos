import { useState } from "react";

import { BotaoGenerico } from "../";

import { BsCreditCard } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";

import styles from "./index.module.css";

export const NovoInvestimento = () => {
    const [ odds, setOdds ] = useState(0);

    return(
        <div className={styles.novo_investimento}>
            <h2 className={styles.titulo}>Novo Investimento</h2>

            <form>
                <div className={styles.input_class}>
                    <label htmlFor="tipo-investimento">Tipo de investimento</label>
                    <div className={styles.div_com_icone}>
                        <select
                            name="tipo-invetimento"
                            id="tipo-investimento"
                            className={styles.input_field_novo_investimento}
                        >
                            <option value="animal">Animal</option>
                            <option value="dezena">Dezena</option>
                            <option value="centena">Centena</option>
                            <option value="milhar">Milhar</option>
                        </select>
                        <BsFillCaretDownFill className={styles.icone_seta}/>
                    </div>
                </div>
                
                <div className={styles.input_class}>
                    <label htmlFor="numero-jogado">Número</label>
                    <input
                        id="numero-jogado"
                        placeholder="0000"
                        className={styles.input_field_novo_investimento}
                    />
                </div>
                
                <div className={styles.input_class}>
                    <label htmlFor="distribuicao">Distribuição</label>
                    <div className={styles.div_com_icone}>
                    <select
                        id="distribuicao"
                        className={styles.input_field_novo_investimento}
                    >
                        <option value="normal">Normal</option>
                        <option value="cabeca">Cabeça</option>
                    </select>
                    <BsFillCaretDownFill className={styles.icone_seta}/>
                    </div>
                </div>

                <p className={styles.odds_totais}>Odds totais: {odds}x</p>
                <div className={styles.input_class}>
                    <label htmlFor="valor">Valor</label>
                    <div className={styles.div_com_icone}>
                        <input
                            id="valor"
                            placeholder="0,00"
                            className={styles.input_field_novo_investimento}
                        />
                        <BsCreditCard className={styles.icone_cartao}/>
                    </div>
                </div>

                <BotaoGenerico
                    texto="Investir!"
                    fundo={true}
                    className={styles.botao_novo_investimento}
                />
            </form>
        </div>
    );
}
