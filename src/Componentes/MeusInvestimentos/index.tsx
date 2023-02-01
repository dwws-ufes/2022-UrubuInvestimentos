import { ProximoResultado, BotaoGenerico } from "../";

import Content from "../../Content/Components/MeusInvestimentos.json"
import "./index.css";

interface investimento {
    dia: string;
    hora: string;
    animal: string;
    valor: string;
}

interface propsType {
    investimentos: investimento[] 
}

export const MeusInvestimentos = (props: propsType) => {
        const { investimentos } = props;

        return(
            <div className="meus-investimentos">
                <div className="proximo-resultado-div">
                    <ProximoResultado transparente={false}/>
                    <BotaoGenerico
                        texto={ Content.ButtonInvestement }
                    />
                </div>

                <p className="frase-motivacional"> { Content.Motivational } </p>
                
                <div className="informacoes-rendimentos">
                    <h3>{ Content.Investement }</h3>
                    
                    <div className="div-investimentos">
                        {investimentos.map((investimento, index) => {
                            const { dia, hora, animal, valor } = investimento;
                            return(
                                <div
                                    key={index}
                                    className="investimento"
                                >
                                    <p>{dia.toUpperCase()} {hora}</p>
                                    <p>{animal} - ${valor}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <BotaoGenerico
                    texto={ Content.ButtonWithdraw }
                />
            </div>
        );
}
