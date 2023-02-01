import { useState } from "react";
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { loga, desloga, setDropdown, selectLogin, selectDropdown } from "../../store/slices";
import { setNomeUsuario, selectNomeUsuario, selectTotalDepositado, selectTotalInvestido, selectTotalLucrado } from "../../store/slices";

import { BotaoGenerico, Logo } from "../";

import { FaBars, FaRegUser } from 'react-icons/fa';

import styles from "./index.module.css";
import Content from "../../Content/Components/Header.json"

interface propsType {
    abreCadastro: () => void;
    fechaCadastro: () => void;
    abreEntrar: () => void;
    fechaEntrar: () => void;
    toggleSidebar?: () => void;
}

export const Header = (props: propsType) => {
    const { abreCadastro, fechaCadastro, abreEntrar, fechaEntrar } = props;
    
    // controla se eh mostrado login/entrar ou as informacoes do usuario
    
    // decide se o dropdown de opcoes de login eh mostrado ou nao
    const [ mostraDropDown, setMostraDropDown ] = useState(false);
    
    const logado = useSelector(selectLogin);
    const dropdown = useSelector(selectDropdown);

    const nomeUsuario = useSelector(selectNomeUsuario);
    const dispatch = useDispatch();

    console.log(logado, nomeUsuario);

    return(
        <div className={styles.header}>

            <FaBars className={styles.bar_icon} onClick={props?.toggleSidebar}/>

            <div className={styles.header_centro}>
                <Link className={styles.link_home} to='/'>
                    <Logo />
                </Link>
            </div>
            
            {/* caso nao logado mostra botoes de logar, caso contrario mostra botoes de perfil */}
            { logado ?
                <div
                    className={`${styles.header_direito} ${styles.header_direito_logado}`}
                    onClick={() => {dispatch({type: setDropdown, payload: !dropdown})}}
                >
                    <p 
                        className={styles.nome_usuario}
                    >
                        {nomeUsuario}
                    </p>
                    
                    <FaRegUser onClick={() => setMostraDropDown(anterior => !anterior)} className={styles.icone_usuario}/>
                </div>
            :
                <div className={styles.header_direito}>
                    <BotaoGenerico
                        texto={ Content.Page.Login }
                        href="#"
                        fundo={false}
                        callback={() => {
                            fechaCadastro();
                            abreEntrar();
                        }}
                    />
                    <BotaoGenerico
                        texto={ Content.Page.SingIn }
                        href="#"
                        fundo={true}
                        callback={() => {
                            fechaEntrar();
                            abreCadastro();
                        }}
                    />
                </div> 
            }
        </div>
    );
}
