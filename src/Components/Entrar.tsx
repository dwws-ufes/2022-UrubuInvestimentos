import React from "react";

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

                <a id="entrar-esqueceu-senha" href=".">Esqueceu a senha?</a>

                <BotaoGenerico texto="Entrar &rarr;" href="#" fundo={true} callback={() => null}/>
            </form>

            <p id="ainda-nao-investidor">Ainda não é investidor? <a href=".">Cadastre-se agora!</a></p>

            {/*<FontAwesomeIcon icon={faXmark} id="entrar-x" onClick={fechaEntrar}/>*/}
        </div>
    );
}
