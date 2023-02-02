import { useState } from "react";

import { BotaoGenerico } from "../";

import { BsCreditCard } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";

import CONTENTS from "../../Content/Components/NovoInvestimento.json"
import styles from "./index.module.css";

const Contents = CONTENTS["pt-Br"];

export const NovoInvestimento = () => {
    const [ odds, setOdds ] = useState(0);

    return(
        <div className={styles.novo_investimento}>
            <h2 className={styles.titulo}>{ Contents.Title }</h2>

            <form>
                <div className={styles.input_class}>
                    <label htmlFor="tipo-investimento">{ Contents.Investment.Title }</label>
                    <div className={styles.div_com_icone}>
                        <select
                            name="tipo-invetimento"
                            id="tipo-investimento"
                            className={styles.input_field_novo_investimento}
                        >
                            <option value="animal">{ Contents.Investment.Types.Animal }</option>
                            <option value="dezena">{ Contents.Investment.Types.Ten }</option>
                            <option value="centena">{ Contents.Investment.Types.Hundred }</option>
                            <option value="milhar">{ Contents.Investment.Types.Thousand }</option>
                        </select>
                        <BsFillCaretDownFill className={styles.icone_seta}/>
                    </div>
                </div>
                
                <div className={styles.input_class}>
                    <label htmlFor="numero-jogado">{ Contents.Investment.Number }</label>
                    <input
                        id="numero-jogado"
                        placeholder="0000"
                        className={styles.input_field_novo_investimento}
                    />
                </div>
                
                <div className={styles.input_class}>
                    <label htmlFor="distribuicao">{ Contents.Investment.Distribution.Title }</label>
                    <div className={styles.div_com_icone}>
                    <select
                        id="distribuicao"
                        className={styles.input_field_novo_investimento}
                    >
                        <option value="normal">{ Contents.Investment .Distribution.Types.Normal}</option>
                        <option value="cabeca">{ Contents.Investment.Distribution.Types.Head }</option>
                    </select>
                    <BsFillCaretDownFill className={styles.icone_seta}/>
                    </div>
                </div>

                <p className={styles.odds_totais}>{ Contents.Investment.Proportion }: {odds}x</p>
                <div className={styles.input_class}>
                    <label htmlFor="valor">{ Contents.Investment.Value }</label>
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
                    texto={ Contents.DoInvestment }
                    fundo={true}
                    className={styles.botao_novo_investimento}
                />
            </form>
        </div>
    );
}
