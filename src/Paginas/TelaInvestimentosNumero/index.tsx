import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from './../../services/api';

import { Header, Sidebar, CardPerfil } from "../../Componentes";

import Content from "../../Content/Pages/TelaInvestimentosNumero.json"
import styles from './index.module.css';

export const TelaInvestimentoNumero = () => {
    const investmentOwner = localStorage.getItem("profileId");

    const [ sidebar, setSidebar ] = useState(false);
    const [ betType, setBetType ] = useState("D");
    const [ selectedNumber, setSelectedNumber ] = useState("");
    const [ distribution, setDistribution ] = useState("N");
    const [ value, setValue ] = useState(0);

    const navigate = useNavigate();

    async function investmentHandler(e:any){
        e.preventDefault();

        console.log(investmentOwner);

        const odds: number = 100;

        const investmentData = {
            selectedNumber,
            betType,
            distribution,
            value,
            odds
        }

        try{
            const investmentInfo = await api.post("/tela-investimentos", investmentData, {
                headers: {
                    Authorization: investmentOwner,
                }
            });

            navigate("/perfil");
        }catch(err){
            console.error(err);
            alert("Houve um erro ao criar o investimento, tente novamente");
        }
    }

    return(
        <div className={styles.tela_investimentos_numero}>
            <Header
                abreCadastro={() => null}
                fechaCadastro={() => null}
                abreEntrar={() => null}
                fechaEntrar={() => null}
                toggleSidebar={() => setSidebar(anterior => !anterior)}
            />

            <div className={styles.main_content}>
                { sidebar && <Sidebar/> }
                <CardPerfil
                    nome="David Messias"
                    saldo={0}
                    investimentos={0}
                    lucrou={0}
                    cartoes={[]}
                />
                <div className={styles.form}>
                    <form onSubmit={investmentHandler}>
                        <h1>{ Content.Title }</h1>
                        <section>
                            <p>{ Content.Investment.TitleTypes }</p>
                            <select
				                value={betType}
                                onChange={e => setBetType(e.target.value)}
                                required
			                >
                                { Content.Investment.Types.map((element) => {return ( <option value={ element.charAt(0) }>{ element }</option>)})}
                            </select>
                            
                            <p>{ Content.Investment.Number }</p>
                            <input
                                pattern="[0-9]{4}"
                                maxLength={4}
                                minLength={4}
                                placeholder="0000"
                                value={selectedNumber}
                                onChange={e => setSelectedNumber(e.target.value)}
                                required
                            />
                            <p>{ Content.Investment.TitleDistribution }</p>
                            <select
                                value={distribution}
                                onChange={e => setDistribution(e.target.value)}
                                required
			                >
                                { Content.Investment.Distributions.map((element) => { return ( <option value={ element.charAt(0) }>{ element }</option>)})}
                            </select>

                            <p>{ Content.Investment.Value }</p>
                            <input
                                type="number"
                                min={0.00}
                                max={10000.00}
                                step={0.01} 
                                placeholder="0.00"
                                value={value}
                                onChange={e => setValue(Number(e.target.value))}
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
