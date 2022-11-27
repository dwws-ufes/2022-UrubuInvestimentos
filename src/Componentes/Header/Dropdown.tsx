import React from "react";
import { Link } from 'react-router-dom';

import "./index.css";

interface propsType {
    sair: () => void;
}

export const Dropdown = (props: propsType) => {
        const { sair } = props;

        return(
            <div className="dropdown">
                <Link className="l1" to="/perfil">Meu perfil</Link>
                <Link className="l2" to="/perfil">Investir</Link>
                <Link className="l3" to="/">Sair</Link>
            </div>
        );
}
