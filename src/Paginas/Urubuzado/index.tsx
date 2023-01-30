import { useNavigate } from 'react-router-dom';
import { BotaoGenerico } from '../../Componentes';

import Content from "../../Content/Pages/Urubuzado.json"
import './index.css';

export const Urubuzado = () => {
    const navigate = useNavigate()

    return(
        <div className="Urubuzado">
            <h1>{ Content.Title }</h1>
            <p>{ Content.Content }</p>
            <BotaoGenerico
                texto={ Content.Button }
                callback={() => navigate("/")}
                className="botao-voltar-tela-inicial"
            />
        </div>
    );
}
