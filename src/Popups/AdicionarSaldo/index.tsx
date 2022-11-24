import React from "react";

import { Logo } from '../../Componentes/Logo';
import { BotaoGenerico } from '../../Componentes/BotaoGenerico';

import { FaMoneyBill } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { CgClose } from 'react-icons/cg';

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
                <BsCreditCard className="adicionar-saldo-icone"/>
                </div>

                <BotaoGenerico texto="Confirmar" href="#" fundo={true} callback={() => null}/>
            </form>

            <CgClose
                className="x"
                // onClick={fechaEntrar}
            />
        </div>
    );
}
