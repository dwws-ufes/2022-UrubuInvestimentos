import React from "react";

import { BotaoGenerico } from '../../Componentes/BotaoGenerico';
import { Logo } from '../../Componentes/Logo';

import { CgClose } from 'react-icons/cg';

import "./index.css"

interface propsType {
    fechaCadastro: () => void;

}

export const Cadastro = (props: propsType) => {
    const { fechaCadastro } = props;

    return(
        <div className="cadastro">
            <img src="./images/cadastro.svg" alt="cadastro" />

            <div className="cadastro-info">
                <Logo />
                <h3>Cadastre-se no Urubu Investimentos!</h3>
                
                <form action="">
                    <input type="text" name="email" placeholder="Endereço de Email"/>
                    <input type="text" name="senha" placeholder="Senha"/>
                    <input type="number" name="idade" placeholder="Idade"/>

                    <p className="termos-condicoes">Ao se inscrever, você concorda com os <a href=".logo">Termos de serviço</a>.</p>

                    <BotaoGenerico texto="Começe já! &rarr;" href="#" fundo={true} callback={() => null}/>
                </form>

                <p className="ja-investidor">Já é um investidor? <a href=".logo">Entre</a>.</p>
            </div>
        <CgClose 
            className="x"
            onClick={fechaCadastro}
        />
        </div>
    );
}
