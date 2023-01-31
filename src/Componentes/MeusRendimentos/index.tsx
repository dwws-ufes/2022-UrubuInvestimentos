import { ProximoResultado, BotaoGenerico } from "../";

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
                    <ProximoResultado transparente={false}/>
                    <BotaoGenerico
                        texto="Novo Investimento"    
                    />
                </div>

                <p className="frase-motivacional">
                    Você sabia que estatisticamente 95% das pessoas viciadas em jogos de azar param antes de tirar a sorte grande?!!!
                </p>
                
                <div className="informacoes-rendimentos">
                    <h3>Meus Rendimentos</h3>

                    <p>Total investido: ${totalInvestido}</p>
                    <p>Total lucrado: ${totalLucrado}</p>
                    <p>Saldo: ${saldo}</p>
                </div>

                <BotaoGenerico
                    texto="Sacar dinheiro"
                />
            </div>
        );
}
