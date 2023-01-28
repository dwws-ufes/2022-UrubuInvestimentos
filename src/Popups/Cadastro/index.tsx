import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../Componentes';
import { CgClose } from 'react-icons/cg';

import styles from "./index.module.css"

interface propsType {
    fechaCadastro: () => void;
}

export const Cadastro = (props: propsType) => {
    const { fechaCadastro } = props;
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [idade, setIdade] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e:any) => {
        e.preventDefault();
        if (Number(idade) < 18){
            alert("Peça ajuda aos seus pais para investir");
            return ;
        }
        const data = { email, senha, idade }
        try{
            // const response = await api.post("/accountsTemp", data)
            navigate("/cadastro", { state: data });
        }
        catch (err){
            alert("Erro ao iniciar criacao de conta");
        }
    }

    return(
        <div className={styles.cadastro}>
            <div className={styles.bonus}>  
                <p>Cadastre-se e ganhe 1000 quid para começar os investimentos!</p>
            </div>

            <div className={styles.cadastro_info}>
                <Logo />
                
                <form onSubmit={handleRegister}>
                    <h3>Cadastre-se no Urubu Investimentos!</h3>

                    <input
                        type="email"
                        name="email"
                        placeholder="Endereço de Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        required 
                    />
                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        inputMode="numeric"
                        name="idade"
                        placeholder="Idade"
                        value={idade} 
                        onChange={e => setIdade(e.target.value)}
                        required
                        min={0}
                    />

                    <p className={styles.termos_condicoes}>Ao se inscrever, você concorda com os <a href=".logo">termos de serviço</a>.</p>

                    <button type="submit">Começe já! &rarr;</button>

                    <p className={styles.ja_investidor}>Já é um investidor? <a href=".logo">Entre</a>.</p>
                </form>

            </div>

        <CgClose 
            className={styles.x}
            onClick={fechaCadastro}
        />
        </div>
    );
}
