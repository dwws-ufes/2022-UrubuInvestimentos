import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../Componentes';
import { CgClose } from 'react-icons/cg';

import { useSelector, useDispatch } from "react-redux";
import { setCadastro, setEntrar } from "../../store/pageInfoSlice";
import CONTENTS from '../../Content/Popups/Cadastro.json'
import { selectLinguagem } from "../../store/pageInfoSlice";

import styles from "./index.module.css"
import api from "../../services/api";

export const Cadastro = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [idade, setIdade] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();
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
            await api.post("/register", data);
            dispatch(setCadastro(false));
            dispatch(setEntrar(false));
            navigate("/cadastro", { state: data });
        }
        catch (err:any){
            console.error(err);
            alert(err.response.data.error);
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
                        placeholder={ Contents.Infos.Age }
                        value={idade} 
                        onChange={e => setIdade(e.target.value)}
                        required
                        min={0}
                    />

                    <p
                        className={styles.termos_condicoes}
                    >
                        { Contents.Terms[0] }
                        <b
                            onClick={() => {
                                dispatch(setCadastro(false));
                                dispatch(setEntrar(false));
                                navigate("/zumzumcapoeira");
                            }}
                        >
                            { Contents.Terms[1] }
                        </b>
                        
                    </p>

                    <button type="submit">{ Contents.Begin } &rarr;</button>

                    <p
                        className={styles.ja_investidor}
                    >
                        Contents.Enter[0]
                        <b
                            onClick={() => {
                                dispatch(setCadastro(false));
                                dispatch(setEntrar(true));
                            }}
                        >
                            Contents.Enter[1]
                        </b>
                        .
                    </p>
                </form>

            </div>

        <CgClose 
            className={styles.x}
            onClick={() => dispatch(setCadastro(false))}
        />
        </div>
    );
}
