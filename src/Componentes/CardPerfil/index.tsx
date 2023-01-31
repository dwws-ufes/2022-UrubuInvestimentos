import { FaRegUser, FaMoneyCheckAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { BsCreditCard } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

import { BotaoGenerico } from "../";

import styles from "./index.module.css";

interface propsType {
    nome: string;
    saldo: number;
    investimentos: number | string;
    lucrou: number;
    cartoes: string[];
}

export const CardPerfil = (props: propsType) => {
    const { nome, saldo, investimentos, lucrou, cartoes } = props;

    return(
        <div className={styles.card_perfil}>
            <div className={styles.parte_superior_perfil}>
                <FaRegUser className={styles.logo_perfil}/>
                <p>{nome}</p>
                <p>${`${saldo.toFixed(2)}`}</p>
            </div>
            <div className={styles.parte_meio_perfil}>
                <div>
                   <FaMoneyCheckAlt className={styles.icone_geral}/>
                   <p>{investimentos} Investimentos</p>
                </div>
                <div>
                    <GiReceiveMoney className={styles.icone_geral}/>
                    <p>Lucrou ${`${lucrou.toFixed(2)}`}</p>
                </div>
            </div>
            <div className={styles.parte_inferior_perfil}>
                <button>Adicionar Cartão</button>

                <div>
                    {cartoes.map((cartao, index) =>
                        <div
                            className={styles.cartao_individual}
                            key={index}
                        >  
                            <div className={styles.cartao_div}>
                                <BsCreditCard className={styles.cartao_individual}/>
                                <p>{cartao}</p>
                            </div>
                            <IoCloseSharp className={styles.cartao_individual}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
