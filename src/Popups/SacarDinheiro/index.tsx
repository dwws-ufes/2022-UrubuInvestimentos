import { Logo, BotaoGenerico } from "../../Componentes";

import { FaMoneyBill } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { AiOutlineCaretDown } from "react-icons/ai";

import "./index.css"
import CONTENTS from '../../Content/Popups/SacarDinheiro.json'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLinguagem } from "../../store/pageInfoSlice";

interface propsType {
    saldo: string;
}

export const SacarDinheiro = (props: propsType) => {
    const { saldo } = props;
    const Contents = CONTENTS[useSelector(selectLinguagem)];

    return(
        <div className="sacar-dinheiro">
            <Logo />

            <h3>{ Contents.Title }</h3>

            <p>{ Contents.Balance }{saldo}</p>

            <form action="" className="sacar-dinheiro-form">
                <div className="input-sacar-dinheiro">
                    <input
                        type="text"
                        name="email"
                        placeholder={ Contents.Value }
                    />
                    <FaMoneyBill className="sacar-dinheiro-icone"/>
                </div>
                
                <div className="input-sacar-dinheiro">
                <select>
                    <option>{ Contents.Cards[0] }</option>
                    <option>{ Contents.Cards[1] }</option>
                </select>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1em"
                }}>
                    <AiOutlineCaretDown className="sacar-dinheiro-icone"/>
                    <BsCreditCard className="sacar-dinheiro-icone"/>
                </div>
                </div>

                <BotaoGenerico
                    texto={ Contents.Button }
                    fundo={true}
                    className="confirmar-sacar-dinheiro"
                />
            </form>

            <CgClose
                className="x"
                // onClick={fechaEntrar}
            />
        </div>
    );
}
