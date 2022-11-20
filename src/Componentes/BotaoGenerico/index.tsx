import React from "react";
import { IconType } from "react-icons";

import "./index.css"

interface propsType {
    texto: string;
    icon?: JSX.Element;
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
                {props?.icon && <div className="icone">{props?.icon}</div>}
            </a>
        </div>
    );
}
