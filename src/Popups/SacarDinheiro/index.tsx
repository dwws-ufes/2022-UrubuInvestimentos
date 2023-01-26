import { Logo, BotaoGenerico } from "../../Componentes";

import { FaMoneyBill } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { AiOutlineCaretDown } from "react-icons/ai";

import "./index.css"

interface propsType {
    saldo: string;
}

export const SacarDinheiro = (props: propsType) => {
    const { saldo } = props;

    return(
        <div className="sacar-dinheiro">
            <Logo />

            <h3>Sacar dinheiro</h3>

            <p>Saldo: ${saldo}</p>

            <form action="" className="sacar-dinheiro-form">
                <div className="input-sacar-dinheiro">
                    <input
                        type="text"
                        name="email"
                        placeholder="Valor do saque"
                    />
                    <FaMoneyBill className="sacar-dinheiro-icone"/>
                </div>
                
                <div className="input-sacar-dinheiro">
                <select>
                    <option>Cartao 1</option>
                    <option>Cartao 2</option>
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
                    texto="Sacar dinheiro"
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
