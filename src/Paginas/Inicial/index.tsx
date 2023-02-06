import { useEffect, useState } from "react";
import api from '../../services/api'

import { Header, Sidebar, UltimoResultado, Searchbar, Resultado } from "../../Componentes";
import { Cadastro, Entrar} from "../../Popups";
import { LoginDropdown } from "../../Popups/LoginDropdown";

import { useSelector } from "react-redux";
import { selectDropdown } from "../../store/pageInfoSlice";

import { mapeiaNomeAnimal, mapeiaSrcAnimal } from "../../Utils/mapeiaAnimal";

import styles from "./index.module.css";

interface jogosType {
    gameId: number;
    date: string;
    number1: string;
    number2: string;
    number3: string;
    number4: string;
}

export const Inicial = () => {
    const jogosIniciais: jogosType[] = [{
        gameId: 0,
        date: "",
        number1: "",
        number2: "",
        number3: "",
        number4: ""
    }];

    const [ games, setGames ] = useState(jogosIniciais);

    useEffect(() => {
        console.log("chamou useEffect");
        api.get('/').then((request) => {console.log(request); setGames(request.data.reverse())});
    }, []);

    const showDropdown = useSelector(selectDropdown);

    const [showCadastro, setCadastro] = useState(false);
    const [showEntrar, setEntrar] = useState(false);
    const [sidebar, setSidebar] = useState(true);

    return (
    <div>
        <Header
            abreCadastro={() => setCadastro(true)}
            fechaCadastro={() => setCadastro(false)}
            abreEntrar={() => setEntrar(true)}
            fechaEntrar={() => setEntrar(false)}
            toggleSidebar={() => setSidebar(anterior => !anterior)}
        />

        <main className={styles.main}>

        {sidebar && <Sidebar />}
        <section className={styles.conteudo_principal}>
            <UltimoResultado
                fotoSrc={mapeiaSrcAnimal(games[0].number1)}
                animal={mapeiaNomeAnimal(games[0].number1)}
                dia={games[0].date}
                milhares={[games[0].number1, games[0].number2, games[0].number3, games[0].number4]}
            />

            <Searchbar />

            <div className={styles.resultados_anteriores}>

                {/* Nao mostra o ultimo jogo nos resultados, pois ele ja eh mostrado no card inicial */}
                {games.filter((game, index) => index !== 0).map( game => {
                    const { gameId, date, number1, number2, number3, number4  } = game;
                    
                    const nome = mapeiaNomeAnimal(number1);
                    const src = mapeiaSrcAnimal(number1);

                    return (
                    <Resultado
                        key={gameId}
                        src={src}
                        dia={date}
                        animal={nome}
                        milhares={[number1, number2, number3, number4]}
                    />
                    );
                })}
            </div>
        </section>
        </main>

        { showEntrar && <Entrar fechaEntrar={() => {setEntrar(false);}}/> }
        { showCadastro && <Cadastro fechaCadastro={() => {setCadastro(false);}}/> }
        { showDropdown && <LoginDropdown sair={() => {}}/> }
    </div>
    );
}
