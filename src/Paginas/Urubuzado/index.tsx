import { useNavigate } from 'react-router-dom';
import { BotaoGenerico } from '../../Componentes';

import './index.css';

export const Urubuzado = () => {
    const navigate = useNavigate()

    return(
        <div className="Urubuzado">
            <h1>ERROR 420</h1>
            <p>Você BUGOU o Site. Crie outra conta para continuar investindo :&#41; 😅.</p>
            <BotaoGenerico
                texto="Voltar para a página inicial"
                callback={() => navigate("/")}
                className="botao-voltar-tela-inicial"
            />
        </div>
    );
}
