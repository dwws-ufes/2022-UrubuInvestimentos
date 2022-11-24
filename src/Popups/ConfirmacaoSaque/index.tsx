import React from "react";

import { BotaoGenerico } from "../../Componentes/BotaoGenerico";

import "./index.css";

export const ConfirmacaoSaque = () => {
    return(
        <div className="confirmacao-saque-pop-up">
            <p>Tem certeza que deseja sacar este dinheiro?
            <br/>
            Você não poderá utilizá-lo para futuros investimentos :(</p>

            <div className="botoes-confirmacao-saque">
                <BotaoGenerico texto="Continuar Investindo!!!" fundo={true}/>
                <BotaoGenerico texto="Sim" fundo={false}/>
            </div>
        </div>
    );
}
