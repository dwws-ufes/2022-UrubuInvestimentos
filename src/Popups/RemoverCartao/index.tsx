import { BotaoGenerico } from "../../Componentes";

import "./index.css";
import CONTENTS from '../../Content/Popups/RemoverCartao.json'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLinguagem } from "../../store/pageInfoSlice";

export const RemoverCartao = () => {
    const Contents = CONTENTS[useSelector(selectLinguagem)];

    return(
        <div className="remover-cartao-pop-up">
            <p>{ Contents.Title }</p>

            <div className="botoes-remover-cartao">
                <BotaoGenerico texto={ Contents.Yes } fundo={false}/>
                <BotaoGenerico texto={ Contents.No } fundo={true}/>
            </div>
        </div>
    );
}
