import React, { useState } from "react";

import { BotaoGenerico } from "../BotaoGenerico";

import { BsCreditCard } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";

import "./index.css";

export const NovoInvestimento = () => {
    const [ odds, setOdds ] = useState(0);

    return(
        <div className="novo-investimento">
            <h2 className="titulo">Novo Investimento</h2>

            <form>
                <div className="input-class">
                    <label htmlFor="tipo-investimento">Tipo de investimento</label>
                    <div className="div-com-icone">
                        <select
                            name="tipo-invetimento"
                            id="tipo-investimento"
                            className="input-field-novo-investimento"
                        >
                            <option value="animal">Animal</option>
                            <option value="dezena">Dezena</option>
                            <option value="centena">Centena</option>
                            <option value="milhar">Milhar</option>
                        </select>
                        <BsFillCaretDownFill className="icone-seta"/>
                    </div>
                </div>
                
                <div className="input-class">
                    <label htmlFor="numero-jogado">Número</label>
                    <input
                        id="numero-jogado"
                        placeholder="0000"
                        className="input-field-novo-investimento"
                    />
                </div>
                
                <div className="input-class">
                    <label htmlFor="distribuicao">Distribuição</label>
                    <div className="div-com-icone">
                    <select
                        id="distribuicao"
                        className="input-field-novo-investimento"
                    >
                        <option value="normal">Normal</option>
                        <option value="cabeca">Cabeça</option>
                    </select>
                    <BsFillCaretDownFill className="icone-seta"/>
                    </div>
                </div>

                <p className="odds-totais">Odds totais: {odds}x</p>
                <div className="input-class">
                    <label htmlFor="valor">Valor</label>
                    <div className="div-com-icone">
                        <input
                            id="valor"
                            placeholder="0,00"
                            className="input-field-novo-investimento"
                        />
                        <BsCreditCard className="icone-cartao"/>
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
