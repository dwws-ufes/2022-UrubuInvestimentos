import { Logo, BotaoGenerico } from "../../Componentes";

import { BsCreditCard } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { BsFillCalendarFill } from "react-icons/bs";
import { IoInformationCircle } from "react-icons/io5";

import "./index.css"

export const AdicionarCartao = () => {
    return(
        <div className="adicionar-cartao">
            <Logo />

            <h3>Adicione um cartão</h3>

            <form action="" className="adicionar-cartao-form">
                <input
                    type="text"
                    name="email"
                    placeholder="Nome completo no cartão"
                    className="adicionar-cartao-input"
                />

                <div className="input-adicionar-cartao">
                    <input
                        type="text"
                        name="email"
                        placeholder="Número"
                        className="adicionar-cartao-input"
                    /> 
                    <BsCreditCard className="adicionar-cartao-icone"/>
                </div>
                       
                <div className="validade-cvv">
                    <div>
                        <input
                            type="text"
                            name="validade"
                            placeholder="Validade"
                        />
                        <BsFillCalendarFill className="adicionar-cartao-icone"/>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="cvv"
                            placeholder="CVV"
                        />
                        <IoInformationCircle className="adicionar-cartao-icone"/>
                    </div> 
                </div>

                <input
                    type="text"
                    name="apelido"
                    placeholder="Apelido do cartão"
                    className="adicionar-cartao-input"
                />

                <BotaoGenerico
                    texto="Adicionar cartão"
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
