import React from "react";

import "./index.css";

interface propsType {

}

export const Logo = (props: propsType) => {
    return(
        <div className="logo">
            <img src="/images/urubuzado.svg" alt="logo urubu" className="urubu-svg"/>
            <h2 className="nome-empresa">Urubu Investimentos</h2>
        </div>
    );
}
