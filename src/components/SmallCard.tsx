import React from "react";

interface propsType {
    titulo: string;
    descricao: string;
}

export const SmallCard = (props: propsType) => {
    const { titulo, descricao } = props;
    
    return(
        <div className="small-card">
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>
    );
}