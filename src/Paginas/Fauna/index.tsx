import { useEffect, useState } from "react";
import api from '../../services/api'

import { Header, Sidebar, Searchbar, AnimalInfo } from "../../Componentes";
import { Cadastro, Entrar} from "../../Popups";
import { LoginDropdown } from "../../Popups/LoginDropdown";
import { useSelector } from "react-redux";
import { selectDropdown, selectEntrar, selectCadastro, selectSidebar, selectSearch } from "../../store/pageInfoSlice";
import { animais } from "../../Utils/mapeiaAnimal";

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

export const Fauna = () => {
    const [ games, setGames ] = useState(jogosIniciais);

    useEffect(() => {
        api.get('/').then((request) => {setGames(request.data.reverse())});
    }, []);

    const showDropdown = useSelector(selectDropdown);
    const showEntrar = useSelector(selectEntrar);
    const showCadastro = useSelector(selectCadastro);
    const showSidebar = useSelector(selectSidebar);
    const search = useSelector(selectSearch);

    return (
    <div>
        <Header/>

        <main className={styles.main}>

        {showSidebar && <Sidebar />}
        <section className={styles.conteudo_principal}>
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "2rem"
                }}
            >
                Fauna Brasileira
            </h1>

            <Searchbar placeholder="Procure um animal"/>

            <div className={styles.resultados_anteriores}>
                {/* Nao mostra o ultimo jogo nos resultados, pois ele ja eh mostrado no card inicial */}
                {animais
                    .filter(animal => {
                        const { nome, nomeEn } = animal;

                        if(
                            nome.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                            || nomeEn.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                        )
                            return true;
                        else
                            return false;
                    })
                    .map( (animal, index) => {
                        const { nome, nomeEn, src, descricao } = animal;

                        return (
                            <AnimalInfo
                                fotoSrc={src}
                                nome={nome}
                                nomeEn={nomeEn}
                                key={index}
                            />
                        );
                    })
                }
            </div>
        </section>
        </main>

        { showEntrar && <Entrar/> }
        { showCadastro && <Cadastro/> }
        { showDropdown && <LoginDropdown/> }
    </div>
    );
}