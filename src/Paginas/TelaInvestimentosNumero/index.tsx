import { useState } from "react";

import { Header, Sidebar, CardPerfil } from "../../Componentes";

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
                        <h1>Novo Investimento</h1>
                        <section>
                            <p>Tipo de investimento</p>
                            <select>
                                <option value="Dezena" selected>Dezena</option>
                                <option value="Centena">Centena</option>
                                <option value="Milhar">Milhar</option>
                            </select>
                            <p>Número</p>
                            <input
                                pattern="[0-9]{4}"
                                maxLength={4}
                                minLength={4}
                                required
                                placeholder="0000"
                            />
                            <p>Distribuição</p>
                            <select>
                                <option value="Normal">Normal</option>
                                <option value="Cabeça">Cabeça</option>
                            </select>
                            <p>Valor</p>
                            <input
                                type="number"
                                min={0.00}
                                max={10000.00}
                                step={0.01} 
                                placeholder="0.00"
                                required
                            />
                        </section>
                        <button type="submit">Investir!</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
