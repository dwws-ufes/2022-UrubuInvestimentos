import React from "react";

import { FaRegUser, FaMoneyCheckAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { BsCreditCard } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

import { BotaoGenerico } from "../BotaoGenerico";

import "./index.css";

interface propsType {
    nome: string;
    saldo: string;
    investimentos: number | string;
    lucrou: string;
    cartoes: string[];
}

export const CardPerfil = (props: propsType) => {
    const { nome, saldo, investimentos, lucrou, cartoes } = props;

    return(
        <div className="card-perfil">
            <div className="parte-superior-perfil">
                <FaRegUser className="logo-perfil"/>
                <p>{nome}</p>
                <p>${saldo}</p>
            </div>
            <div className="parte-meio-perfil">
                <div>
                   <FaMoneyCheckAlt className="icone-geral"/>
                   <p>{investimentos} Investimentos</p>
                </div>
                <div>
                    <GiReceiveMoney className="icone-geral"/>
                    <p>Lucrou ${lucrou}</p>
                </div>
            </div>
            <div className="parte-inferior-perfil">
                <BotaoGenerico
                    texto="Adicionar Cartão"
                />

                <div className="cartoes">
                    {cartoes.map((cartao, index) =>
                        <div
                            className="cartao-individual"
                            key={index}
                        >  
                            <div className="cartao-div">
                                <BsCreditCard className="icone-cartao-geral"/>
                                <p>{cartao}</p>
                            </div>
                            <IoCloseSharp className="icone-cartao-geral icone-x"/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
