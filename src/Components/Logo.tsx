import React from "react";

interface propsType {

}

export const Logo = (props: propsType) => {
    return(
        <div className="logo">
            <img src="/images/urubuzado.svg" alt="" className="Urubu-svg"/>
            <h1 id="nome-empresa">Urubu Investimentos</h1>
        </div>
    );
}