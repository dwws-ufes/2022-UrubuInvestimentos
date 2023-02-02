import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { logaPrimeiraVez, desloga, setDropdown, selectLogin, selectDropdown } from "../../store/loginSlice";
import { setNomeUsuario, selectNomeUsuario, selectSaldo } from "../../store/userInfoSlice";

import styles from "./index.module.css";

interface propsType {
    sair: () => void;
}

export const LoginDropdown = (props: propsType) => {
        const { sair } = props;
        
        const navigate = useNavigate();
        const dispatch = useDispatch();

        return(
            <div className={styles.dropdown}>
                <Link className={`${styles.link_dropdown} ${styles.l1}`} to="/perfil">Meu perfil</Link>
                <Link className={styles.link_dropdown} to="/perfil">Novo investimento</Link>
                <div
                    className={`${styles.link_dropdown} ${styles.l3}`}
                    onClick={() => {
                        localStorage.clear();
                        dispatch(desloga());
                        navigate("/");
                    }}
                >
                    Sair
                </div>
            </div>
        );
}
