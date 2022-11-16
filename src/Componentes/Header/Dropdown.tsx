import React from "react";

import "./index.css";

interface propsType {
    sair: () => void;
}

export const Dropdown = (props: propsType) => {
        const { sair } = props;

        return(
            <div className="dropdown">
                <p className="p1">Meu perfil</p>
                <p className="p2">Investir</p>
                <p className="p3" onClick={sair}>Sair</p>
            </div>
        );
}
