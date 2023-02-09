import { useState } from 'react';
import { Logo } from '../../Componentes';
import { CgClose } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { loga, selectCadastro, selectDropdown, selectEntrar, selectLogin, selectSidebar, setCadastro, setEntrar } from "../../store/pageInfoSlice";
import { setEmail, setSenha, setNomeUsuario, setSaldo, selectNomeUsuario, selectSaldo, setInvestimentos, selectInvestimentos } from "../../store/userInfoSlice";

import api from './../../services/api';

import styles from "./index.module.css";

export const Entrar = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const navigate = useNavigate();

    const logado = useSelector(selectLogin);
    const showDropdown = useSelector(selectDropdown);
    const showCadastro = useSelector(selectCadastro);
    const showEntrar = useSelector(selectEntrar);
    const showSidebar = useSelector(selectSidebar);

    const nomeUsuario = useSelector(selectNomeUsuario);
    const investimentos = useSelector(selectInvestimentos);
    
    const dispatch = useDispatch();

    async function loginHandler(e:any){
        e.preventDefault();

        const dataLogin = {
            email,
            password
        };

        try{
            const loginInfo = await api.post("/sessions", dataLogin);

            localStorage.setItem('profileId', loginInfo.data[0].id);
            localStorage.setItem('profileName', loginInfo.data[0].nickname);

            dispatch(setNomeUsuario(loginInfo.data[0].nickname));
            dispatch(setSaldo(loginInfo.data[0].balance));
            
            const investmentsInfo = await api.get("/tela-investimentos", {
                headers: {
                    Authorization: loginInfo.data[0].id,
                }
            });

            dispatch(setInvestimentos(investmentsInfo.data))

            dispatch(loga());
            dispatch(setCadastro(false));
            dispatch(setEntrar(false));

            navigate("/perfil");
        }catch(err){
            console.error(err);
            alert("Erro ao logar na conta, tente novamente");
        };
    }

    return(
        <div className={styles.entrar}>
            <Logo />

            <form onSubmit={loginHandler}>
                <h3>Entre na sua conta</h3>

                <input
                    type="email"
                    name="email"
                    placeholder="Endereço de Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <p
                    className={styles.entrar_esqueceu_senha}
                    onClick={() => {
                        dispatch(setCadastro(false));
                        dispatch(setEntrar(false));
                        navigate("/zumzumcapoeira");
                    }}
                >
                    Esqueceu a senha?
                </p>

                <button type="submit">Entrar &rarr;</button>

                <p
                    className={styles.ainda_nao_investidor}
                >
                    Ainda não é investidor?&nbsp;
                    <b
                        onClick={() => {
                            dispatch(setEntrar(false));
                            dispatch(setCadastro(true))
                        }}
                    >
                        Cadastre-se agora!
                    </b>
                </p>
            </form>

            <CgClose
                className={styles.x}
                onClick={() => dispatch(setEntrar(false))}
            />
        </div>
    );
}
