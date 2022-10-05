import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/sharp-solid-svg-icons";

import { Logo } from './Logo';
import { BotaoGenerico } from './BotaoGenerico';

interface propsType {
    fechaEntrar: () => void;
}

export const Entrar = (props: propsType) => {
    const { fechaEntrar } = props;

    return(
        <div id="entrar">
            <Logo />

            <h3>Entre na sua conta</h3>

            <form action="">
                <input
                    type="text"
                    name="email"
                    placeholder="Endereço de Email"
                />
                <input
                    type="text"
                    name="senha"
                    placeholder="Senha"
                />

                <p>Esqueceu a senha?</p>

                <BotaoGenerico texto="Entrar &rarr;" href="#" fundo={true} callback={() => null}/>
            </form>

            <FontAwesomeIcon icon={faXmark} id="entrar-x" onClick={fechaEntrar}/>
        </div>
    );
}