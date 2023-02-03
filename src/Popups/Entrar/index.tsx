import { Logo, BotaoGenerico } from '../../Componentes';
import { CgClose } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loga, selectLogin } from "../../store/pageInfoSlice";
import { setEmail, setSenha, setNomeUsuario, setSaldo, selectNomeUsuario, selectSaldo } from "../../store/userInfoSlice";

import api from './../../services/api';

import styles from "./index.module.css";

import { useState } from 'react';

interface propsType {
    fechaEntrar: () => void;
}

export const Entrar = (props: propsType) => {
    const { fechaEntrar } = props;
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function loginHandler(e:any){
        e.preventDefault();

        const dataLogin = {
            email,
            password
        };

        try{
            const loginInfo = await api.post("/sessions", dataLogin);

            console.log(loginInfo.data)

            localStorage.setItem('profileId', loginInfo.data[0].id);
            localStorage.setItem('profileName', loginInfo.data[0].nickname);

            dispatch(setNomeUsuario(loginInfo.data[0].nickname));
            dispatch(setSaldo(loginInfo.data[0].balance));
            
            dispatch(loga());

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

                <Link className={styles.entrar_esqueceu_senha} to="/zumzumcapoeira">Esqueceu a senha?</Link>

                <button type="submit">Entrar &rarr;</button>

                <p className={styles.ainda_nao_investidor}>Ainda não é investidor? <a href=".">Cadastre-se agora!</a></p>
            </form>

            <CgClose
                className={styles.x}
                onClick={fechaEntrar}
            />
        </div>
    );
}
