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

export const AdicionarSaldo = (props: propsType) => {
    return(
        <div className="adicionar-saldo">
            <Logo />

            <h3>Adicionar saldo</h3>

            <form action="" className="adicionar-saldo-form">
                <div className="input-adicionar-saldo">
                    <input
                        type="text"
                        name="email"
                        placeholder="Valor"
                    />
                    <FaMoneyBill className="adicionar-saldo-icone"/>
                </div>
                
                <div className="input-adicionar-saldo">
                <select>
                    <option>Cartao 1</option>
                    <option>Cartao 2</option>
                </select>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1em"
                }}>
                    <AiOutlineCaretDown className="adicionar-saldo-icone"/>
                    <BsCreditCard className="adicionar-saldo-icone"/>
                </div>
                </div>

                <BotaoGenerico
                    texto="Confirmar"
                    fundo={true}
                    className="confirmar-adicionar-saldo"
                />
            </form>

            <CgClose
                className="x"
                // onClick={fechaEntrar}
            />
        </div>
    );
}
