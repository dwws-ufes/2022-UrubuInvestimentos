import { useState } from 'react';
import api from './../../services/api';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loga, selectLogin, setaNomeUsuario } from "../../store/loginSlice";

import { Header, Sidebar } from '../../Componentes';
import { FiTriangle, FiCalendar } from 'react-icons/fi';

import Contents from "../../Content/Pages/Cadastro.json";
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
                    <h1>{Contents.Title}</h1>
                    <form onSubmit={handleRegisterFinal}>
                        <div className="inputs">
                            <section>
                                <h2>{Contents.Content.PersonalDatas.Title}</h2>
                                <input 
                                    placeholder={Contents.Content.PersonalDatas.Id}
                                    pattern='([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})' 
                                    maxLength={15}
                                    minLength={11}
                                    value={cpf}
                                    onChange={ e => setCpf(e.target.value)}
                                    required
                                />
                                <input 
                                    placeholder={Contents.Content.PersonalDatas.Nickname}
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
                                    {Contents.Content.PersonalDatas.Locations.map((value) => { return (<option value={value}>{value}</option>)})}

                                </select>
                                <FiTriangle className='fi-triangle' fill='white'/>
                            </section>
                            <section>
                                <h2>{Contents.Content.Payment.Title}</h2>
                                <input 
                                    placeholder={Contents.Content.Payment.Card.Name}
                                    //pattern='[a-zA-Z ]'
                                    value={cartaoNomeCompleto}
                                    onChange={ e => setCartaoNomeCompleto(e.target.value)}
                                    required
                                />
                                <input 
                                    placeholder={Contents.Content.Payment.Card.Number}
                                    pattern='[0-9]{16}'
                                    required
                                    value={cartaoNumero}
                                    onChange = {e => setCartaoNumero(e.target.value)}
                                />
                                <div className="val-cvv">
                                    <input 
                                        placeholder={Contents.Content.Payment.Card.Validity}
                                        pattern='[0-9]{2}/[0-9]{2}'
                                        value={cartaoValidade}
                                        onChange={ e => setCartaoValidade(e.target.value)}
                                        required
                                    />
                                    <FiCalendar className='fi-calendar' fill='white' fillOpacity={0.5} height={100} />
                                    <input 
                                        placeholder={Contents.Content.Payment.Card.SecurityCode}
                                        pattern='[0-9]{3}'
                                        value={cartaoCVV}
                                        onChange={ e => setCartaoCVV(e.target.value)}
                                        required
                                    />
                                </div>
                                <input 
                                    placeholder={Contents.Content.Payment.Card.Nickname}
                                    required
                                    value={cartaoApelido}
                                    onChange={e => setCartaoApelido(e.target.value)}
                                />
                            </section>
                        </div>
                        <button type="submit">{Contents.Content.Complet}</button>
                    </form>
                </div>
            </div>
            {/* <footer><Footer/></footer> */}
        </div>
    )
}
