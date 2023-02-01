import { useState } from "react";

import { BotaoGenerico } from "../";

import { BsCreditCard } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";

import Content from "../../Content/Components/NovoInvestimento.json"
import "./index.css";

export const NovoInvestimento = () => {
    const [ odds, setOdds ] = useState(0);

    return(
        <div className="novo-investimento">
            <h2 className="titulo">{ Content.Title }</h2>

            <form>
                <div className="input-class">
                    <label htmlFor="tipo-investimento">{ Content.Investment.Title }</label>
                    <div className="div-com-icone">
                        <select
                            name="tipo-invetimento"
                            id="tipo-investimento"
                            className="input-field-novo-investimento"
                        >
                            <option value="animal">{ Content.Investment.Types.Animal }</option>
                            <option value="dezena">{ Content.Investment.Types.Ten }</option>
                            <option value="centena">{ Content.Investment.Types.Hundred }</option>
                            <option value="milhar">{ Content.Investment.Types.Thousand }</option>
                        </select>
                        <BsFillCaretDownFill className="icone-seta"/>
                    </div>
                </div>
                
                <div className="input-class">
                    <label htmlFor="numero-jogado">{ Content.Investment.Number }</label>
                    <input
                        id="numero-jogado"
                        placeholder="0000"
                        className="input-field-novo-investimento"
                    />
                </div>
                
                <div className="input-class">
                    <label htmlFor="distribuicao">{ Content.Investment.Distribution.Title }</label>
                    <div className="div-com-icone">
                    <select
                        id="distribuicao"
                        className="input-field-novo-investimento"
                    >
                        <option value="normal">{ Content.Investment .Distribution.Types.Normal}</option>
                        <option value="cabeca">{ Content.Investment.Distribution.Types.Head }</option>
                    </select>
                    <BsFillCaretDownFill className="icone-seta"/>
                    </div>
                </div>

                <p className="odds-totais">{ Content.Investment.Proportion }: {odds}x</p>
                <div className="input-class">
                    <label htmlFor="valor">{ Content.Investment.Value }</label>
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
                    texto={ Content.DoInvestment }
                    fundo={true}
                    className="botao-novo-investimento"
                />
            </form>
        </div>
    );
}
