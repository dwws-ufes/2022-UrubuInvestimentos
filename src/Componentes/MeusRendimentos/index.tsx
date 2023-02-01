import { ProximoResultado, BotaoGenerico } from "../";

import Content from "../../Content/Components/MeusRendimentos.json"
import "./index.css";

interface propsType {
    totalInvestido: string;
    totalLucrado: string;
    saldo: string;
}

export const MeusRendimentos = (props: propsType) => {
        const { totalInvestido, totalLucrado, saldo } = props;

        return(
            <div className="meus-rendimentos">
                <div className="proximo-resultado-div">
                    <ProximoResultado/>
                    <BotaoGenerico
                        texto= { Content.Investment }
                    />
                </div>

                <p className="frase-motivacional"> { Content.Motivational } </p>
                
                <div className="informacoes-rendimentos">
                    <h3> { Content.Income.Title } </h3>

                    <p>{ Content.Income.Invested }: ${totalInvestido}</p>
                    <p>{ Content.Income.Profited }: ${totalLucrado}</p>
                    <p>{ Content.Income.Balance }: ${saldo}</p>
                </div>

                <BotaoGenerico
                    texto={ Content.Withdraw }
                />
            </div>
        );
}
