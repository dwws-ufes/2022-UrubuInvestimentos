import React from "react";
import { Link } from 'react-router-dom';

import styles from "./index.module.css";

interface propsType {
    sair: () => void;
}

export const Dropdown = (props: propsType) => {
        const { sair } = props;

        return(
            <div className={styles.dropdown}>
                <Link className="link-dropdown l1" to="/perfil">Meu perfil</Link>
                <Link className=" link-dropdown l3" to="/">Sair</Link>
            </div>
        );
}
