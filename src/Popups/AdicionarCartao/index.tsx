import { Logo, BotaoGenerico } from "../../Componentes";

import { BsCreditCard } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { BsFillCalendarFill } from "react-icons/bs";
import { IoInformationCircle } from "react-icons/io5";

import "./index.css"
import CONTENTS from '../../Content/Popups/AdicionarCartao.json'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLinguagem } from "../../store/pageInfoSlice";

export const AdicionarCartao = () => {
    const Contents = CONTENTS[useSelector(selectLinguagem)];

    return(
        <div className="adicionar-cartao">
            <Logo />

            <h3>{ Contents.AddCard }</h3>

            <form action="" className="adicionar-cartao-form">
                <input
                    type="text"
                    name="email"
                    placeholder={ Contents.Card.Name }
                    className="adicionar-cartao-input"
                />

                <div className="input-adicionar-cartao">
                    <input
                        type="text"
                        name="email"
                        placeholder={ Contents.Card.Number }
                        className="adicionar-cartao-input"
                    /> 
                    <BsCreditCard className="adicionar-cartao-icone"/>
                </div>
                       
                <div className="validade-cvv">
                    <div>
                        <input
                            type="text"
                            name="validade"
                            placeholder={ Contents.Card.Validity }
                        />
                        <BsFillCalendarFill className="adicionar-cartao-icone"/>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="cvv"
                            placeholder={ Contents.Card.SecurityCode }
                        />
                        <IoInformationCircle className="adicionar-cartao-icone"/>
                    </div> 
                </div>

                <input
                    type="text"
                    name="apelido"
                    placeholder={ Contents.Card.Nickname }
                    className="adicionar-cartao-input"
                />

                <BotaoGenerico
                    texto={ Contents.SaveCard }
                    fundo={true}
                />
            </form>

            <CgClose
                className="x"
                // onClick={fechaEntrar}
            />
        </div>
    );
}
