import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { loga, desloga, setDropdown, selectLogin, selectDropdown } from "../../store/pageInfoSlice";
import { setNomeUsuario, selectNomeUsuario, selectSaldo } from "../../store/userInfoSlice";

import styles from "./index.module.css";

export const LoginDropdown = () => {
        const navigate = useNavigate();
        const dispatch = useDispatch();

        return(
            <div className={styles.dropdown}>
                <div
                    className={`${styles.link_dropdown} ${styles.l1}`}
                    onClick={() => {
                        dispatch(setDropdown(false));
                        navigate("/perfil");
                    }}
                >
                    Meu perfil
                </div>
                <div
                    className={styles.link_dropdown}
                    onClick={() => {
                        dispatch(setDropdown(false));
                        navigate("/tela-investimentos");
                    }}
                        
                >
                    Novo investimento
                </div>
                <div
                    className={`${styles.link_dropdown} ${styles.l3}`}
                    onClick={() => {
                        localStorage.clear();
                        dispatch(desloga());
                        dispatch(setDropdown(false));
                        navigate("/");
                    }}
                >
                    Sair
                </div>
            </div>
        );
}
