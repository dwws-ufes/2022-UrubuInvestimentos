import { useState } from 'react';
import api from './../../services/api';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loga, selectLogin, setaNomeUsuario } from "../../store/loginSlice";

import { Header, Sidebar } from '../../Componentes';
import { FiTriangle, FiCalendar } from 'react-icons/fi';

import './index.css';

export const Cadastro = () => {
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
        const dataCartao = {
            name:cartaoNomeCompleto,
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
            alert("Erro ao finalizar criação da conta, tente novamente");
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
                                    <option value="" disabled >Região</option>
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
                                    // pattern='[a-zA-Z ]'
                                    value={cartaoNomeCompleto}
                                    onChange={ e => setCartaoNomeCompleto(e.target.value)}
                                    required
                                />
                                <input 
                                    placeholder='Número'
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
                                    placeholder='Apelido do cartão'
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
