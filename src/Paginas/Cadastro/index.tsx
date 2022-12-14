import React, { useState } from 'react';
import api from './../../services/api';
import { useNavigate, useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { loga, desloga, selectLogin, setaNomeUsuario } from "../../store/loginSlice";

import { Header } from '../../Componentes/Header';
import { Sidebar } from '../../Componentes/Sidebar';
import { FiTriangle, FiCalendar } from 'react-icons/fi';

import './index.css';
// import { Footer } from '../../Componentes/Footer';

export default function Cadastro(){
    const location = useLocation();
    const { email, senha, idade } = location.state;
    
    const [ sidebar, setSidebar ] = useState(false);
    
    const [apelido, setApelido] = useState("");
    const [cpf , setCpf] = useState("");
    const [regiao, setRegiao] = useState("");
    const [cartaoNomeCompleto, setCartaoNomeCompleto] = useState("");
    const [cartaoNumero, setCartaoNumero] = useState("");
    const [cartaoValidade, setCartaoValidade] = useState("");
    const [cartaoCVV, setCartaoCVV] = useState("");
    const [cartaoApelido, setCartaoApelido] = useState("");
    
    const navigate = useNavigate();
    
    const handleRegisterFinal = async (e:any) => {
        e.preventDefault();
        const dataPerfil = {
            email:email,
            password:senha,
            age:idade,
            nickname:apelido,
            CPF:cpf,
            region:regiao
        }
        const dataCartao = {name:cartaoNomeCompleto,
            number:cartaoNumero,
            expiration:cartaoValidade,
            CVV:cartaoCVV,
            cardNickname:cartaoApelido};

        try{
            const responseAccounts = await api.post("/accounts", dataPerfil);
            const card = {...dataCartao, owner:responseAccounts.data.id};
            const responseCards = await api.post("/cards",card, {
                headers: {
                    Authorization: responseAccounts.data.id, 
                }
            });
            localStorage.setItem('profileId', responseAccounts.data.id);
            localStorage.setItem('profileName', apelido);

            dispatch(loga());
            dispatch(setaNomeUsuario(apelido))

            navigate('/perfil');
        }
        catch (err){
            console.log(err)
            alert("Erro ao finalizar cria????o da conta, tente novamente");
        }
    }

    const logado = useSelector(selectLogin);
    const dispatch = useDispatch();

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
                    <form onSubmit={handleRegisterFinal}>
                        <div className="inputs">
                            <section>
                                <h2>Dados pessoais</h2>
                                <input 
                                    placeholder='CPF'
                                    pattern='([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})' 
                                    maxLength={15}
                                    minLength={11}
                                    value={cpf}
                                    onChange={ e => setCpf(e.target.value)}
                                    required
                                />
                                <input 
                                    placeholder='Apelido'
                                    // pattern='[0-9a-zA-Z_- ]'
                                    value={apelido}
                                    onChange={e => setApelido(e.target.value)}
                                    required
                                />
                                <select 
                                    value={regiao}
                                    onChange={ e => setRegiao(e.target.value) }
                                    required
                                >
                                    <option value="" disabled >Regi??o</option>
                                    <option value="Acre - AC">Acre - AC</option>
                                    <option value="Alagoas - AL">Alagoas - AL</option>
                                    <option value="Amap?? - AP">Amap?? - AP</option>
                                    <option value="Amazonas - AM">Amazonas - AM</option>
                                    <option value="Bahia - BA">Bahia - BA</option>
                                    <option value="Cear?? - CA">Cear?? - CA</option>
                                    <option value="Distrito Federal - DF">Distrito Federal - DF</option>
                                    <option value="Esp??rito Santo - ES">Esp??rito Santo - ES</option>
                                    <option value="Goi??s - GO">Goi??s - GO</option>
                                    <option value="Maranh??o - MA">Maranh??o - MA</option>
                                    <option value="Mato Grosso - MT">Mato Grosso - MT</option>
                                    <option value="Mato Grosso do Sul - MS">Mato Grosso do Sul - MS</option>
                                    <option value="Minas Gerais - MG">Minas Gerais - MG</option>
                                    <option value="Par?? - PA">Par?? - PA</option>
                                    <option value="Para??ba - PB">Para??ba - PB</option>
                                    <option value="Paran?? - PR">Paran?? - PR</option>
                                    <option value="Pernambuco - PE">Pernambuco - PE</option>
                                    <option value="Piau?? - PI">Piau?? - PI</option>
                                    <option value="Rio de Janeiro - RJ">Rio de Janeiro - RJ</option>
                                    <option value="Rio Grande do Norte - RN">Rio Grande do Norte - RN</option>
                                    <option value="Rio Grande do Sul - RS">Rio Grande do Sul - RS</option>
                                    <option value="Rond??nia - RO">Rond??nia - RO</option>
                                    <option value="Roraima - RR">Roraima - RR</option>
                                    <option value="Santa Catarina - SC">Santa Catarina - SC</option>
                                    <option value="S??o Paulo - SP">S??o Paulo - SP</option>
                                    <option value="Sergipe - SE">Sergipe - SE</option>
                                    <option value="Tocantins - TO">Tocantins - TO</option>
                                </select>
                                <FiTriangle className='fi-triangle' fill='white'/>
                            </section>
                            <section>
                                <h2>Adicione um cart??o</h2>
                                <input 
                                    placeholder='Nome completo no cart??o' 
                                    // pattern='[a-zA-Z ]'
                                    value={cartaoNomeCompleto}
                                    onChange={ e => setCartaoNomeCompleto(e.target.value)}
                                    required
                                />
                                <input 
                                    placeholder='N??mero'
                                    pattern='[0-9]{16}'
                                    required
                                    value={cartaoNumero}
                                    onChange = {e => setCartaoNumero(e.target.value)}
                                />
                                <div className="val-cvv">
                                    <input 
                                        placeholder='Validade'
                                        pattern='[0-9]{2}/[0-9]{2}'
                                        value={cartaoValidade}
                                        onChange={ e => setCartaoValidade(e.target.value)}
                                        required
                                    />
                                    <FiCalendar className='fi-calendar' fill='white' fillOpacity={0.5} height={100} />
                                    <input 
                                        placeholder='CVV'
                                        pattern='[0-9]{3}'
                                        value={cartaoCVV}
                                        onChange={ e => setCartaoCVV(e.target.value)}
                                        required
                                    />
                                </div>
                                <input 
                                    placeholder='Apelido do cart??o'
                                    // pattern='[0-9a-zA-Z_- ]'
                                    required
                                    value={cartaoApelido}
                                    onChange={e => setCartaoApelido(e.target.value)}
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
