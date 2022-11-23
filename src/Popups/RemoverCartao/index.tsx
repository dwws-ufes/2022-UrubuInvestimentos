import React from "react";

import { BotaoGenerico } from "../../Componentes/BotaoGenerico";

import "./index.css";

export const RemoverCartao = () => {
    return(
        <div className="remover-cartao-pop-up">
            <p>Tem certeza que deseja remover o cartão?</p>

            <div className="botoes-remover-cartao">
                <BotaoGenerico texto="Sim"/>
                <BotaoGenerico texto="Não"/>
            </div>
        </div>
    );
}
