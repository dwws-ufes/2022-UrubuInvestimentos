import React from "react";

import { BotaoGenerico } from "../BotaoGenerico";

import "./index.css";

export const NovoInvestimento = () => {
    return(
        <div className="novo-investimento">
            <h2 className="titulo">Novo Investimento</h2>

            <form>
                Tipo de investimento
                <select>
                    <option />
                </select>

                Número <input />
                
                Distribuicao
                <select>
                    <option />
                </select>

                Valor <input />

                <BotaoGenerico texto="Investir"/>
            </form>
        </div>
    );
}
