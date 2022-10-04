import React from "react";

interface propsType {
    texto: string;
    href: string;
    fundo: boolean;
    callback: () => void;
}

export const BotaoGenerico = (props: propsType) => {
    const { texto, href, fundo, callback } = props;
    
    let className: string = "botao-generico " + (fundo ? "botao-com-fundo"
 : "botao-sem-fundo");

    return(
        <div className={className} onClick={callback}>
            <a href={href} target="_blank">
                <p>{texto}</p>
            </a>
        </div>
    );
}