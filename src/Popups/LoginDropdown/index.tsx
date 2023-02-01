import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { loga, desloga, setDropdown, selectLogin, selectDropdown } from "../../store/slices";
import { setNomeUsuario, selectNomeUsuario, selectTotalDepositado, selectTotalInvestido, selectTotalLucrado } from "../../store/slices";

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
                        dispatch({type: desloga})
                        navigate("/");
                    }}
                >
                    Sair
                </div>
            </div>
        );
}
