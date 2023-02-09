import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../Componentes';
import { CgClose } from 'react-icons/cg';

import { useSelector, useDispatch } from "react-redux";
import { loga, desloga, setDropdown, setSidebar, selectLogin, selectDropdown, selectCadastro, selectEntrar, setCadastro, setEntrar, selectSidebar } from "../../store/pageInfoSlice";
import { setNomeUsuario, selectNomeUsuario, selectSaldo } from "../../store/userInfoSlice";

import styles from "./index.module.css"
import api from "../../services/api";
import { AxiosError } from "axios";

export const Cadastro = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [idade, setIdade] = useState("");
    const navigate = useNavigate();

    const logado = useSelector(selectLogin);
    const showDropdown = useSelector(selectDropdown);
    const showCadastro = useSelector(selectCadastro);
    const showEntrar = useSelector(selectEntrar);
    const showSidebar = useSelector(selectSidebar);

    const nomeUsuario = useSelector(selectNomeUsuario);

    const dispatch = useDispatch();

    const handleRegister = async (e:any) => {
        e.preventDefault();
        if(isNaN(Number(idade))) {
            alert("A idade informada deve ser um numero");
            return ;
        }
        else if (Number(idade) < 18){
            alert("Peça ajuda aos seus pais para investir");
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
            // alert("Erro ao iniciar criacao de conta");
        }
    }

    return(
        <div className={styles.cadastro}>
            <div className={styles.bonus}>  
                <p>Cadastre-se e ganhe 1000 quid para começar os investimentos!</p>
            </div>

            <div className={styles.cadastro_info}>
                <Logo />
                
                <form onSubmit={handleRegister}>
                    <h3>Venha para o Urubu!</h3>

                    <input
                        className={styles.cadastro_info_input}
                        type="email"
                        name="email"
                        placeholder="Endereço de Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        required 
                    />
                    <input
                        className={styles.cadastro_info_input}
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        required
                    />
                    <input
                        className={styles.cadastro_info_input}
                        type="text"
                        inputMode="numeric"
                        name="idade"
                        placeholder="Idade"
                        value={idade} 
                        onChange={e => setIdade(e.target.value)}
                        required
                        min={0}
                    />

                    <p
                        className={styles.termos_condicoes}
                    >
                        Ao se inscrever, você concorda com os&nbsp;
                        <b
                            onClick={() => {
                                dispatch(setCadastro(false));
                                dispatch(setEntrar(false));
                                navigate("/zumzumcapoeira");
                            }}
                        >
                            termos de serviço
                        </b>
                        
                    </p>

                    <button type="submit">Começe já! &rarr;</button>

                    <p
                        className={styles.ja_investidor}
                    >
                        Já é um investidor?&nbsp;
                        <b
                            onClick={() => {
                                dispatch(setCadastro(false));
                                dispatch(setEntrar(true));
                            }}
                        >
                            Entre
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
