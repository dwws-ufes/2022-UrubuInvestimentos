import { useState } from "react";

import { BsCreditCard } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";

import Content from "../../Content/Components/NovoInvestimento.json"
import styles from "./index.module.css";

export const NovoInvestimento = () => {
    const [ odds, setOdds ] = useState(0);

    return(
        <div className={styles.novo_investimento}>
            <h2 className={styles.titulo}>{ Content.Title }</h2>

            <form>
                <div className={styles.input_class}>
                    <label htmlFor="tipo-investimento">{ Content.Investment.Title }</label>
                    <div className={styles.div_com_icone}>
                        <select
                            name="tipo-invetimento"
                            id="tipo-investimento"
                            className={styles.input_field_novo_investimento}
                        >
                            <option value="animal">{ Content.Investment.Types.Animal }</option>
                            <option value="dezena">{ Content.Investment.Types.Ten }</option>
                            <option value="centena">{ Content.Investment.Types.Hundred }</option>
                            <option value="milhar">{ Content.Investment.Types.Thousand }</option>
                        </select>
                        <BsFillCaretDownFill className={styles.icone_seta}/>
                    </div>
                </div>

                <div className={styles.input_class}>
                    <label htmlFor="numero-jogado">{ Content.Investment.Number }</label>
                    <input
                        id="numero-jogado"
                        placeholder="0000"
                        className={styles.input_field_novo_investimento}
                    />
                </div>

                <div className={styles.input_class}>
                    <label htmlFor="distribuicao">{ Content.Investment.Distribution.Title }</label>
                    <div className={styles.div_com_icone}>
                    <select
                        id="distribuicao"
                        className={styles.input_field_novo_investimento}
                    >
                        <option value="normal">{ Content.Investment .Distribution.Types.Normal}</option>
                        <option value="cabeca">{ Content.Investment.Distribution.Types.Head }</option>
                    </select>
                    <BsFillCaretDownFill className={styles.icone_seta}/>
                    </div>
                </div>

                <p>{ Content.Investment.Proportion }: {odds}x</p>
                <div className={styles.input_class}>
                    <label htmlFor="valor">{ Content.Investment.Value }</label>
                    <div className={styles.div_com_icone}>
                        <input
                            id="valor"
                            placeholder="0,00"
                            className={styles.input_field_novo_investimento}
                        />
                        <BsCreditCard className={styles.icone_cartao}/>
                    </div>
                </div>

                <button
                    className={styles.botao_novo_investimento}
                >
                    { Content.DoInvestment }
                </button>
            </form>
        </div>
    );
}
