import { BotaoGenerico } from "../../Componentes";

import "./index.css";

export const RemoverCartao = () => {
    return(
        <div className="remover-cartao-pop-up">
            <p>Tem certeza que deseja remover o cartão?</p>

            <div className="botoes-remover-cartao">
                <BotaoGenerico texto="Sim" fundo={false}/>
                <BotaoGenerico texto="Não" fundo={true}/>
            </div>
        </div>
    );
}
