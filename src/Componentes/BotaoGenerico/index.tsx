import React from "react";

import "./index.css"

interface propsType {
    texto: string;
    icone?: JSX.Element;
    className?: string;
    href: string;
    fundo: boolean;
    callback: () => void;
}

export const BotaoGenerico = (props: propsType) => {
    const { texto, href, fundo, callback } = props;
    
    let classeDeFundo: string = `botao-generico ${fundo ? "botao-com-fundo"
 : "botao-sem-fundo"}`;

    return(
        <div className={`${classeDeFundo} ${props?.className}`} onClick={callback}>
            <a href={href} target="_self">
                <p className="texto">{texto}</p>
                {props?.icone && <div className="icone">{props?.icone}</div>}
            </a>
        </div>
    );
}
