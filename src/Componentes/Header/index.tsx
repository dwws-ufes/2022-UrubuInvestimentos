import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { desloga, selectLogin, selectNomeUsuario } from "../../store/loginSlice";
import { Link } from 'react-router-dom';

import { Dropdown } from "./Dropdown";
import { BotaoGenerico, Logo } from "../";

import { FaBars, FaRegUser } from 'react-icons/fa';

import styles from "./index.module.css";

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
    const nomeUsuario = useSelector(selectNomeUsuario);
    const dispatch = useDispatch();

    return(
        <div className={styles.header}>

            <FaBars className={styles.bar_icon} onClick={props?.toggleSidebar}/>

            <div className={styles.header_centro}>
                <Link className={styles.link_home} to='/'>
                    <Logo />
                </Link>
            </div>
            
            {/* caso nao logado mostra botoes de logar, caso contrario mostra botoes de perfil */}
            {logado ?
                <div className={styles.header_direito}>
                    <p 
                        className={styles.nome_usuario}
                        onClick={() => setMostraDropDown(anterior => !anterior)}
                    >
                        {nomeUsuario}
                    </p>
                    
                    <FaRegUser onClick={() => setMostraDropDown(anterior => !anterior)}/>

                    { mostraDropDown && <Dropdown sair={() => dispatch(desloga())}/> }
                </div>
            :
                <div className={styles.header_direito}>
                    <BotaoGenerico
                        texto="Entrar"
                        href="#"
                        fundo={false}
                        callback={() => {
                            fechaCadastro();
                            abreEntrar();
                        }}
                        className="botao-header"
                    />
                    <BotaoGenerico
                        texto="Cadastre-se"
                        href="#"
                        fundo={true}
                        callback={() => {
                            fechaEntrar();
                            abreCadastro();
                        }}
                        className="botao-header"
                    />
                </div> 
            }
        </div>
    );
}
