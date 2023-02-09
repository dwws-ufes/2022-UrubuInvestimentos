import { useState } from "react";
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { loga, desloga, setDropdown, setSidebar, selectLogin, selectDropdown, selectCadastro, selectEntrar, setCadastro, setEntrar, selectSidebar } from "../../store/pageInfoSlice";
import { setNomeUsuario, selectNomeUsuario, selectSaldo } from "../../store/userInfoSlice";

import { Logo } from "../";

import { FaBars, FaRegUser } from 'react-icons/fa';

import styles from "./index.module.css";
import Content from "../../Content/Components/Header.json"

export const Header = () => {
    const logado = useSelector(selectLogin);
    const showDropdown = useSelector(selectDropdown);
    const showCadastro = useSelector(selectCadastro);
    const showEntrar = useSelector(selectEntrar);
    const showSidebar = useSelector(selectSidebar);

    const nomeUsuario = useSelector(selectNomeUsuario);
    
    const dispatch = useDispatch();

    return(
        <div className={styles.header}>

            <FaBars
                className={styles.bar_icon}
                onClick={() => {dispatch(setSidebar(!showSidebar))}}
            />

            <div className={styles.header_centro}>
                <Link className={styles.link_home} to='/'>
                    <Logo />
                </Link>
            </div>
            
            {/* caso nao logado mostra botoes de logar, caso contrario mostra botoes de perfil */}
            { logado ?
                <div
                    className={`${styles.header_direito} ${styles.header_direito_logado}`}
                    onClick={() => {dispatch(setDropdown(!showDropdown))}}
                >
                    <p className={styles.nome_usuario}>{ nomeUsuario }</p>
                    <FaRegUser className={styles.icone_usuario}/>
                </div>
            :
                <div className={styles.header_direito}>
                    <button
                        className={styles.btn_entrar}
                        onClick={() => {
                            dispatch(setCadastro(false));
                            dispatch(setEntrar(!showEntrar));
                        }}
                    >
                        { Content.Page.Login }
                    </button>
                    <button
                        className={styles.btn_cadastro}
                        onClick={() => {
                            dispatch(setCadastro(!showCadastro));
                            dispatch(setEntrar(false));
                        }}
                    >
                        { Content.Page.SingIn }
                    </button>
                </div> 
            }
        </div>
    );
}
