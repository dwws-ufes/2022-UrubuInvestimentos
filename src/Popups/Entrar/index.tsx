import { Logo, BotaoGenerico } from '../../Componentes';
import { CgClose } from 'react-icons/cg';

import "./index.css"

interface propsType {
    fechaEntrar: () => void;
}

export const Entrar = (props: propsType) => {
    const { fechaEntrar } = props;

    return(
        <div className="entrar">
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

                <a className="entrar-esqueceu-senha" href=".">Esqueceu a senha?</a>

                <BotaoGenerico texto="Entrar &rarr;" href="#" fundo={true} callback={() => null}/>
            </form>

            <p className="ainda-nao-investidor">Ainda não é investidor? <a href=".">Cadastre-se agora!</a></p>

            <CgClose
                className="x"
                onClick={fechaEntrar}
            />
        </div>
    );
}
