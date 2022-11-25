import React from "react";

import { Logo } from "../../Componentes/Logo";
import { BotaoGenerico } from "../../Componentes/BotaoGenerico";

import { FaMoneyBill } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { AiOutlineCaretDown } from "react-icons/ai";

import "./index.css"

interface propsType {

}

export const AdicionarCartao = (props: propsType) => {
    return(
        <div className="adicionar-cartao">
            <Logo />

            <h3>Adicionar saldo</h3>

            <form action="" className="adicionar-cartao-form">
                <div className="input-adicionar-cartao">
                    <input
                        type="text"
                        name="email"
                        placeholder="Valor"
                    />
                    <FaMoneyBill className="adicionar-cartao-icone"/>
                </div>
                
                <div className="input-adicionar-cartao">
                <select>
                    <option>Cartao 1</option>
                    <option>Cartao 2</option>
                </select>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1em"
                }}>
                    <AiOutlineCaretDown className="adicionar-cartao-icone"/>
                    <BsCreditCard className="adicionar-cartao-icone"/>
                </div>
                </div>

                <BotaoGenerico
                    texto="Confirmar"
                    fundo={true}
                    className="confirmar-adicionar-cartao"
                />
            </form>

            <CgClose
                className="x"
                // onClick={fechaEntrar}
            />
        </div>
    );
}
