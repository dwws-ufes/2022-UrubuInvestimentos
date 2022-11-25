import React, { useState } from 'react';

import { Header } from '../../Componentes/Header';
import { Sidebar } from '../../Componentes/Sidebar';
import { FiTriangle, FiCalendar } from 'react-icons/fi';

import './index.css';
// import { Footer } from '../../Componentes/Footer';

export default function Cadastro (){
    const [ sidebar, setSidebar ] = useState(false);
    return (
        <div className="Cadastro">
            <Header
                abreCadastro={() => null}
                fechaCadastro={() => null}
                abreEntrar={() => null}
                fechaEntrar={() => null}
                toggleSidebar={() => setSidebar(anterior => !anterior)}
            />
            <div className="main-content">
                {sidebar && <Sidebar/>}


                <div className="form">
                    <h1>Complete seu Cadastro!</h1>
                    <form>
                        <div className="inputs">
                            <section>
                                <h2>Dados pessoais</h2>
                                <input 
                                    placeholder='CPF'
                                    pattern='([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})' 
                                    required
                                    maxLength={15}
                                    minLength={11}
                                />
                                <input 
                                    placeholder='Apelido'
                                    pattern='[0-9a-zA-Z_- ]'
                                />
                                <select required>
                                    <option value="" disabled selected>Região</option>
                                    <option value="Acre - AC">Acre - AC</option>
                                    <option value="Alagoas - AL">Alagoas - AL</option>
                                    <option value="Amapá - AP">Amapá - AP</option>
                                    <option value="Amazonas - AM">Amazonas - AM</option>
                                    <option value="Bahia - BA">Bahia - BA</option>
                                    <option value="Ceará - CA">Ceará - CA</option>
                                    <option value="Distrito Federal - DF">Distrito Federal - DF</option>
                                    <option value="Espírito Santo - ES">Espírito Santo - ES</option>
                                    <option value="Goiás - GO">Goiás - GO</option>
                                    <option value="Maranhão - MA">Maranhão - MA</option>
                                    <option value="Mato Grosso - MT">Mato Grosso - MT</option>
                                    <option value="Mato Grosso do Sul - MS">Mato Grosso do Sul - MS</option>
                                    <option value="Minas Gerais - MG">Minas Gerais - MG</option>
                                    <option value="Pará - PA">Pará - PA</option>
                                    <option value="Paraíba - PB">Paraíba - PB</option>
                                    <option value="Paraná - PR">Paraná - PR</option>
                                    <option value="Pernambuco - PE">Pernambuco - PE</option>
                                    <option value="Piauí - PI">Piauí - PI</option>
                                    <option value="Rio de Janeiro - RJ">Rio de Janeiro - RJ</option>
                                    <option value="Rio Grande do Norte - RN">Rio Grande do Norte - RN</option>
                                    <option value="Rio Grande do Sul - RS">Rio Grande do Sul - RS</option>
                                    <option value="Rondônia - RO">Rondônia - RO</option>
                                    <option value="Roraima - RR">Roraima - RR</option>
                                    <option value="Santa Catarina - SC">Santa Catarina - SC</option>
                                    <option value="São Paulo - SP">São Paulo - SP</option>
                                    <option value="Sergipe - SE">Sergipe - SE</option>
                                    <option value="Tocantins - TO">Tocantins - TO</option>
                                </select>
                                <FiTriangle className='fi-triangle' fill='white'/>
                            </section>
                            <section>
                                <h2>Adicione um cartão</h2>
                                <input 
                                    placeholder='Nome completo no cartão' 
                                    pattern='[a-zA-Z ]'
                                />
                                <input 
                                    placeholder='Número'
                                    pattern='[0-9]{16}'
                                />
                                <div className="val-cvv">
                                    <input 
                                        placeholder='Validade'
                                        pattern='[0-9]{2}/[0-9]{2}'
                                    />
                                    <FiCalendar className='fi-calendar' fill='white' fillOpacity={0.5} height={100} />
                                    <input 
                                        placeholder='CVV'
                                        pattern='[0-9]{3}'
                                    />
                                </div>
                                <input 
                                    placeholder='Apelido do cartão'
                                    pattern='[0-9a-zA-Z_- ]'
                                />
                            </section>
                        </div>
                        <button type="submit">Completar cadastro!</button>
                    </form>
                </div>
            </div>
            {/* <footer><Footer/></footer> */}
        </div>
    )
}
