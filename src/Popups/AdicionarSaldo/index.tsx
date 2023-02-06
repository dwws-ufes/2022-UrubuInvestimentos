import { Logo, BotaoGenerico } from "../../Componentes";

import { FaMoneyBill } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { AiOutlineCaretDown } from "react-icons/ai";

import "./index.css"
import CONTENTS from '../../Content/Popups/AdicionarSaldo.json'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLinguagem } from "../../store/pageInfoSlice";

export const AdicionarSaldo = () => {
    const Contents = CONTENTS[useSelector(selectLinguagem)];

    return(
        <div className="adicionar-saldo">
            <Logo />

            <h3>{ Contents.AddBalance }</h3>

            <form action="" className="adicionar-saldo-form">
                <div className="input-adicionar-saldo">
                    <input
                        type="text"
                        name="email"
                        placeholder={ Contents.Value }
                    />
                    <FaMoneyBill className="adicionar-saldo-icone"/>
                </div>
                
                <div className="input-adicionar-saldo">
                <select>
                    <option>{ Contents.Cards[0] }</option>
                    <option>{ Contents.Cards[1] }</option>
                </select>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1em"
                }}>
                    <AiOutlineCaretDown className="adicionar-saldo-icone"/>
                    <BsCreditCard className="adicionar-saldo-icone"/>
                </div>
                </div>

                <BotaoGenerico
                    texto={ Contents.Button }
                    fundo={true}
                    className="confirmar-adicionar-saldo"
                />
            </form>

            <CgClose
                className="x"
                // onClick={fechaEntrar}
            />
        </div>
    );
}
