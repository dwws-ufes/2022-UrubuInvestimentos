import { useNavigate } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { desloga, setDropdown } from "../../store/pageInfoSlice";

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
