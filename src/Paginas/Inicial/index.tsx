import { useEffect, useState } from "react";
import api from '../../services/api'

// import { useSelector, useDispatch } from "react-redux";

import { Header, Sidebar, UltimoResultado, Searchbar, Resultado } from "../../Componentes";
import { Cadastro, Entrar } from "../../Popups"

import { animais, mapeiaNomeAnimal, mapeiaSrcAnimal } from "../../Utils/mapeiaAnimal";

import styles from "./index.module.css";

interface jogosType {
    gameId: number;
    dia: string,
    number1: string;
    number2: string;
    number3: string;
    number4: string;
    number5?: string;
}

export const Inicial = () => {

    // const jogos = useSelector(selectJogos);
    // const dispatch = useDispatch();

    const [showCadastro, setCadastro] = useState(false);
    const [showEntrar, setEntrar] = useState(false);
    const [sidebar, setSidebar] = useState(true)

    const jogosIniciais: jogosType[] = [
        {
            gameId: 0,
            dia: "26/01/2022",
            number1: "3456",
            number2: "5678",
            number3: "9012",
            number4: "3456",
        },
        {
            gameId: 1,
            dia: "25/01/2023",
            number1: "8910",
            number2: "5678",
            number3: "9012",
            number4: "3456",
        },
        {
            gameId: 2,
            dia: "26/01/2023",
            number1: "3245",
            number2: "5678",
            number3: "9012",
            number4: "3456",
        },
        {
            gameId: 3,
            dia: "27/01/2023",
            number1: "7301",
            number2: "5678",
            number3: "9012",
            number4: "3456",
        },
    ];

    const [ jogos, setJogos ] = useState(jogosIniciais);

    function numeroRandom(min:number, max:number){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min) + min).toString().padStart(4, '0');
    }

    // useEffect(() => {
    //     // api.post("/", {number1:`${numeroRandom(0,9999)}`,number2:`${numeroRandom(0,9999)}`,number3:`${numeroRandom(0,9999)}`,number4:`${numeroRandom(0,9999)}`});    
    //     api.get("/").then((response: any) => {
    //         const { data } = response;
    //         setJogos(response.data);
    //     })
    // }, []);
    
    // Inverte a ordem do vetor de jogos, para que o ultimo seja o primeiro do vetor
    jogos.reverse()
    console.log(jogos)

    return (
    <div>
        <Header
            abreCadastro={ () => {setCadastro(true)}}
            fechaCadastro={() => {setCadastro(false);}}
            abreEntrar={() => {setEntrar(true);}}
            fechaEntrar={() => {setEntrar(false);}}
            toggleSidebar={() => setSidebar(anterior => !anterior)}
        />

        <main className={styles.main}>
        {sidebar && <Sidebar />}
        <section className={styles.conteudo_principal}>
            <UltimoResultado
                fotoSrc={mapeiaSrcAnimal(jogos[0].number1)}
                animal={mapeiaNomeAnimal(jogos[0].number1)}
                dia={jogos[0].dia}
                milhares={[jogos[0].number1, jogos[0].number2, jogos[0].number3, jogos[0].number4]}
            />

            <Searchbar />

            <div className={styles.resultados_anteriores}>

                {/* Nao mostra o ultimo jogo nos resultados, pois ele ja eh mostrado no card inicial */}
                {jogos.filter((jogo, index) => index !== 0).map( jogo => {
                    const { gameId, dia, number1, number2, number3, number4  } = jogo;
                    
                    const nome = mapeiaNomeAnimal(number1);
                    const src = mapeiaSrcAnimal(number1);

                    return (
                    <Resultado
                        key={gameId}
                        src={src}
                        dia={dia}
                        animal={nome}
                        milhares={[number1, number2, number3, number4]}
                    />
                    );
                })}
            </div>
        </section>
        </main>

        {showEntrar && <Entrar fechaEntrar={() => {setEntrar(false);}} />}
        {showCadastro && <Cadastro fechaCadastro={() => {setCadastro(false);}} />}

    </div>
    );
}
