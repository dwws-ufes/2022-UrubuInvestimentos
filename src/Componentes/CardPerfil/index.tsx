import { FaRegUser, FaMoneyCheckAlt } from "react-icons/fa";
import styles from "./index.module.css";
import Content from "../../Content/Components/CardPerfil.json"
import { useState } from "react";
import api from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { selectSaldo, setSaldo } from "../../store/userInfoSlice";

interface propsType {
    nome: string;
    saldo: number;
    investimentos: number | string;
}

export const CardPerfil = (props: propsType) => {
    const investmentOwner = localStorage.getItem("profileId");

    const { nome, saldo, investimentos } = props;

    const [ valor, setValor ] = useState(0);

    const dispatch = useDispatch();

    async function handleAddValor(e:any){
        e.preventDefault();
        e.target.reset();

        const diff = saldo + valor;

        try{
            await api.put('/perfil', { balance: diff }, {
                headers: {
                    Authorization: investmentOwner,
                }
            });
            
            dispatch(setSaldo(diff));
        }catch(err){
            alert(err); 
        }
        
    }

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
                   <p>{investimentos} { Content.Investment }</p>
                </div>
            </div>
            <form
                className={styles.parte_inferior_perfil}
                onSubmit={handleAddValor}
            >
                <input
                    placeholder="$0.00"
                    type="text"
                    inputMode="numeric"
                    onChange={e => setValor(Number(e.target.value))}
                />
                
                <button
                    className={styles.btn}
                    type="submit"
                >
                    { Content.Card }
                </button>
            </form>
                <div>
                </div>
	</div>
    );
}
