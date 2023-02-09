import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setDropdown, setSidebar, selectLogin, selectDropdown, selectCadastro, selectEntrar, setCadastro, setEntrar, selectSidebar, selectLinguagem, setLinguagem } from "../../store/pageInfoSlice";
import { selectNomeUsuario } from "../../store/userInfoSlice";
import { Logo } from "../";
import { FaBars, FaRegUser } from 'react-icons/fa';

import styles from "./index.module.css";
import CONTENTS from "../../Content/Components/Header.json"
import Languages from "../../Content/Languages.json"

export const Header = () => {
    const Contents = CONTENTS[useSelector(selectLinguagem)];
    
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
            <div>
                <select
                    onChange={ e => { 
                        dispatch(setLinguagem(e.target.value));
                    }}
                    required >
                        <option value={useSelector(selectLinguagem)}>{Languages.Languages[useSelector(selectLinguagem)]}</option>
                    {   
                        Languages.Languages.map((element, index) => {
                        return (<option key={index} value={index} >{element}</option>)
                    })}
                </select>
            </div>

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
                        { Contents.Page.Login }
                    </button>
                    <button
                        className={styles.btn_cadastro}
                        onClick={() => {
                                dispatch(setCadastro(!showCadastro));
                                dispatch(setEntrar(false));
                        }}
                    >
                        { Contents.Page.SingIn }
                    </button>
                </div> 
            }
        </div>
    );
}
