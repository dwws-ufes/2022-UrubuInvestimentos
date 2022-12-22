import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../Componentes';
import { CgClose } from 'react-icons/cg';

import "./index.css"

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
        <div className="cadastro">
            <img src="./imagens/cadastro.svg" alt="cadastro" />

            <div className="cadastro-info">
                <Logo />
                <h3>Cadastre-se no Urubu Investimentos!</h3>
                
                <form onSubmit={handleRegister}>
                    <input type="text" name="email" placeholder="Endereço de Email" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="text" name="senha" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required/>
                    <input type="number" name="idade" placeholder="Idade" value={idade} onChange={e => setIdade(e.target.value)} required min={0}/>

                    <p className="termos-condicoes">Ao se inscrever, você concorda com os <a href=".logo">Termos de serviço</a>.</p>

                    {/* <button texto="Começe já! &rarr;" href="#" fundo={true} callback={() => null}/> */}

                    <button type="submit">Começe já! &rarr;</button>
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
