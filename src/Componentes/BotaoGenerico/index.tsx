import React from "react";

import { ProximoResultado } from "../ProximoResultado";

import "./index.css"

interface propsType {
    texto: string;
    icone?: JSX.Element;
    className?: string;
    href?: string;
    fundo?: boolean;
    callback?: () => void;
}

export const BotaoGenerico = (props: propsType) => {
    const { texto } = props;
    

    let classeDeFundo = "botao-generico";

    if(props?.fundo)
        classeDeFundo += " botao-com-fundo";
    else
        classeDeFundo += " botao-sem-fundo"; 

    return(
        <div
            className={`${classeDeFundo} ${props?.className}`}
            onClick={props?.callback}
        >
            <a href={"href" in props ? props.href : "#"} target="_self">
                <p className="texto">{texto}</p>
                {props?.icone && <div className="icone">{props?.icone}</div>}
            </a>
        </div>
    );
}
