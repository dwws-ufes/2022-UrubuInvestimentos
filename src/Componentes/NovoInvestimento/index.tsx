import React, { useState } from "react";

import { BotaoGenerico } from "../BotaoGenerico";

import { BsCreditCard } from "react-icons/bs";

import "./index.css";

export const NovoInvestimento = () => {
    const [ odds, setOdds ] = useState(0);

    return(
        <div className="novo-investimento">
            <h2 className="titulo">Novo Investimento</h2>

            <form>
                <label htmlFor="tipo-investimento">Tipo de investimento</label>
                <select name="tipo-invetimento" id="tipo-investimento">
                    <option value="animal">Animal</option>
                    <option value="dezena">Dezena</option>
                    <option value="centena">Centena</option>
                    <option value="milhar">Milhar</option>
                </select>

                <label htmlFor="numero-jogado">Número</label>
                <input id="numero-jogado"/>
                
                <label htmlFor="distribuicao">Distribuição</label>
                <select id="distribuicao">
                    <option value="normal">Normal</option>
                    <option value="cabeca">Cabeça</option>
                </select>
               
                
                <label htmlFor="numero-cartao">Valor</label>
                <div>
                    <p>Odds totais: {odds}x</p>
                    <div className="valor-div">
                        <input id="numero-cartao"/>
                        <BsCreditCard/>
                    </div>
                </div>

                <BotaoGenerico
                    texto="Investir!"
                    fundo={true}
                    className="botao-novo-investimento"
                />
            </form>
        </div>
    );
}
