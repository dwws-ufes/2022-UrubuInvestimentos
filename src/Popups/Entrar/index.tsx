import { Logo, BotaoGenerico } from '../../Componentes';
import { CgClose } from 'react-icons/cg';

import styles from "./index.module.css";

interface propsType {
    fechaEntrar: () => void;
}

export const Entrar = (props: propsType) => {
    const { fechaEntrar } = props;

    return(
        <div className={styles.entrar}>
            <Logo />

            <form action="">
                <h3>Entre na sua conta</h3>

                <input
                    type="email"
                    name="email"
                    placeholder="Endereço de Email"
                />
                <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                />

                <a className={styles.entrar_esqueceu_senha} href=".">Esqueceu a senha?</a>

                <button>Entrar &rarr;</button>

                <p className={styles.ainda_nao_investidor}>Ainda não é investidor? <a href=".">Cadastre-se agora!</a></p>
            </form>

            <CgClose
                className={styles.x}
                onClick={fechaEntrar}
            />
        </div>
    );
}
