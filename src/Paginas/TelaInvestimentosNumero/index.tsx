import { useState } from "react";

import { Header, Sidebar, CardPerfil } from "../../Componentes";

import Content from "../../Content/Pages/TelaInvestimentosNumero.json"
import './index.css';

export const TelaInvestimentoNumero = () => {
    const [ sidebar, setSidebar ] = useState(false);
    return(
        <div className="tela-investimentos-numero">
            <Header
                abreCadastro={() => null}
                fechaCadastro={() => null}
                abreEntrar={() => null}
                fechaEntrar={() => null}
                toggleSidebar={() => setSidebar(anterior => !anterior)}
            />

            <div className="main-content">
                { sidebar && <Sidebar/> }
                <CardPerfil
                    nome="David Messias"
                    saldo="0 quid"
                    investimentos={0}
                    lucrou="Nada"
                    cartoes={[]}
                />
                <div className="form">
                    <form>
                        <h1>{ Content.Title }</h1>
                        <section>
                            <p>{ Content.Investment.TitleTypes }</p>
                            <select>
                                { Content.Investment.Types.map((element) => {
                                    return ( <option value={ element }>{ element }</option> )
                                    })
                                }
                            </select>
                            
                            <p>{ Content.Investment.Number }</p>
                            <input
                                pattern="[0-9]{4}"
                                maxLength={4}
                                minLength={4}
                                required
                                placeholder="0000"
                            />
                            <p>{ Content.Investment.TitleDistribution }</p>
                            <select>
                                { Content.Investment.Distributions.map((element) => {
                                        return ( <option value={ element }>{ element }</option> )
                                        })
                                }
                            </select>

                            <p>{ Content.Investment.Value }</p>
                            <input
                                type="number"
                                min={0.00}
                                max={10000.00}
                                step={0.01} 
                                placeholder="0.00"
                                required
                            />
                        </section>
                        <button type="submit">{ Content.Investment.Invest }</button>
                    </form>
                </div>
            </div>
        </div>
    );
}