import { useEffect, useState } from "react";
import api from '../../services/api'

import { Header, Sidebar, UltimoResultado, Searchbar, Resultado } from "../../Componentes";
import { Cadastro, Entrar} from "../../Popups";
import { LoginDropdown } from "../../Popups/LoginDropdown";

import { useSelector, useDispatch } from "react-redux";
import { loga, desloga, selectLogin, selectDropdown, selectEntrar, selectCadastro, selectSidebar } from "../../store/pageInfoSlice";
import { selectNomeUsuario, selectSaldo } from "../../store/userInfoSlice";

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

const jogosIniciais: jogosType[] = [{
    gameId: 0,
    date: "",
    number1: "",
    number2: "",
    number3: "",
    number4: ""
}];

export const Inicial = () => {
    const [ games, setGames ] = useState(jogosIniciais);

    useEffect(() => {
        console.log("chamou useEffect");
        api.get('/').then((request) => {console.log(request); setGames(request.data.reverse())});
    }, []);

    const showDropdown = useSelector(selectDropdown);
    const showEntrar = useSelector(selectEntrar);
    const showCadastro = useSelector(selectCadastro);
    const showSidebar = useSelector(selectSidebar);

    return (
    <div>
        <Header/>

        <main className={styles.main}>

        {showSidebar && <Sidebar />}
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

        { showEntrar && <Entrar/> }
        { showCadastro && <Cadastro/> }
        { showDropdown && <LoginDropdown/> }
    </div>
    );
}
