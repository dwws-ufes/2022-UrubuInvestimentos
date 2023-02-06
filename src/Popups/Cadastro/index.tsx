import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../Componentes';
import { CgClose } from 'react-icons/cg';

import styles from "./index.module.css"
import CONTENTS from '../../Content/Popups/Cadastro.json'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLinguagem } from "../../store/pageInfoSlice";

interface propsType {
    fechaCadastro: () => void;
}

export const Cadastro = (props: propsType) => {
    const { fechaCadastro } = props;
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [idade, setIdade] = useState("");
    const navigate = useNavigate();

    const Contents = CONTENTS[useSelector(selectLinguagem)];

    const handleRegister = async (e:any) => {
        e.preventDefault();
        if(isNaN(Number(idade))) {
            alert(Contents.Alerts[0]);
            return ;
        }
        else if (Number(idade) < 18){
            alert(Contents.Alerts[1]);
            return ;
        }
        const data = { email, senha, idade }
        try {
            navigate("/cadastro", { state: data });
        }
        catch (err){
            alert(Contents.Alerts[2]);
        }
    }

    return(
        <div className={styles.cadastro}>
            <div className={styles.bonus}>  
                <p>{ Contents.Promo }</p>
            </div>

            <div className={styles.cadastro_info}>
                <Logo />
                
                <form onSubmit={handleRegister}>
                    <h3>{ Contents.Title }</h3>

                    <input
                        className={styles.cadastro_info_input}
                        type="email"
                        name="email"
                        placeholder={ Contents.Infos.Email }
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        required 
                    />
                    <input
                        className={styles.cadastro_info_input}
                        type="password"
                        name="senha"
                        placeholder={ Contents.Infos.Password }
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        required
                    />
                    <input
                        className={styles.cadastro_info_input}
                        type="text"
                        inputMode="numeric"
                        name="idade"
                        placeholder={ Contents.Infos.Email }
                        value={idade} 
                        onChange={e => setIdade(e.target.value)}
                        required
                        min={0}
                    />

                    <p className={styles.termos_condicoes}>{ Contents.Terms[0] }<Link to="/zumzumcapoeira">{ Contents.Terms[1] }</Link></p>

                    <button type="submit">{ Contents.Begin } &rarr;</button>

                    <p className={styles.ja_investidor}>{ Contents.Enter[0] }<a href=".logo">{ Contents.Enter[0] }</a>.</p>
                </form>

            </div>

        <CgClose 
            className={styles.x}
            onClick={fechaCadastro}
        />
        </div>
    );
}
