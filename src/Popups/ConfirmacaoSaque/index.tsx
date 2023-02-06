import { BotaoGenerico } from "../../Componentes";

import "./index.css";
import CONTENTS from '../../Content/Popups/ConfirmarSaque.json'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLinguagem } from "../../store/pageInfoSlice";

export const ConfirmacaoSaque = () => {

    const Contents = CONTENTS[useSelector(selectLinguagem)];

    return(
        <div className="confirmacao-saque-pop-up">
            <p>{ Contents.Withdrawal1 }
            <br/>
            { Contents.Withdrawal2 }</p>

            <div className="botoes-confirmacao-saque">
                <BotaoGenerico texto={ Contents.Investing } fundo={true}/>
                <BotaoGenerico texto={ Contents.Yes } fundo={false}/>
            </div>
        </div>
    );
}
