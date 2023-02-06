import { useState } from 'react';
import { Logo } from '../../Componentes';
import { CgClose } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { loga } from "../../store/pageInfoSlice";
import { setNomeUsuario, setSaldo } from "../../store/userInfoSlice";

import api from './../../services/api';

import styles from "./index.module.css";
import CONTENTS from '../../Content/Popups/Entrar.json'
import { useSelector, useDispatch } from "react-redux/es";
import { selectLinguagem } from "../../store/pageInfoSlice";

interface propsType {
    fechaEntrar: () => void;
}

export const Entrar = (props: propsType) => {
    const { fechaEntrar } = props;
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const Contents = CONTENTS[useSelector(selectLinguagem)];

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
            alert(Contents.Alerts);
        };
    }

    return(
        <div className={styles.entrar}>
            <Logo />

            <form onSubmit={loginHandler}>
                <h3>{ Contents.Login }</h3>

                <input
                    type="email"
                    name="email"
                    placeholder={ Contents.Email }
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="senha"
                    placeholder={ Contents.Password }
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Link className={styles.entrar_esqueceu_senha} to="/zumzumcapoeira">{ Contents.NoPassword }</Link>

                <button type="submit">{ Contents.In } &rarr;</button>

                <p className={styles.ainda_nao_investidor}>{ Contents.Singin[0] }<a href=".">{ Contents.Singin[1] }</a></p>
            </form>

            <CgClose
                className={styles.x}
                onClick={fechaEntrar}
            />
        </div>
    );
}
