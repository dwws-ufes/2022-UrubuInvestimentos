import React from "react";

interface propsType {
    text: string;
    href: string;
}

export const BotaoGenerico = (props: propsType) => {
    const { text, href } = props;
    
    return(
        <div className="botao-generico">
            <a href={href} target="_blank">
                <p>{text}</p>
            </a>
        </div>
    );
}