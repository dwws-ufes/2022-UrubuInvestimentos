import React from "react";

import { FaRegClock } from "react-icons/fa";

import "./index.css";

interface propsType {

}

export const ProximoResultado = (props: propsType) => {
    return(
        <div className="proximo-resultado">
            <FaRegClock className="relogio"/>
            <p>Próximo resultado:</p>
            <p>2h:10min</p>
            <p></p>
        </div>
    );
}
