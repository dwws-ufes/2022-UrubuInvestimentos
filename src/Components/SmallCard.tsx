import { url } from "inspector";
import React from "react";

interface propsType {
    titulo: string;
    descricao: string;
    imagem: string;
}

export const SmallCard = (props: propsType) => {
    const { titulo, descricao, imagem } = props;

    const style: any = {
        backgroundImage: `url('${imagem}')`,
        backgroundSize: 'cover',
        backgroundColor: 'blue',
    };

    // console.log(imagem)
    
    return(
        <div
            className="small-card"
            style={style}
        >
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            {/* <img src={imagem} alt=""/> */}
        </div>
    );
}