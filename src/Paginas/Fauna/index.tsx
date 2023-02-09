import { useEffect, useState } from "react";
import api from '../../services/api'

import { Header, Sidebar, Searchbar, AnimalInfo } from "../../Componentes";
import { Cadastro, Entrar} from "../../Popups";
import { LoginDropdown } from "../../Popups/LoginDropdown";
import { useSelector } from "react-redux";
import { selectDropdown, selectEntrar, selectCadastro, selectSidebar, selectSearch } from "../../store/pageInfoSlice";
import { animaisType, animais } from "../../Utils/mapeiaAnimal";

import styles from "./index.module.css";
import { GiConsoleController } from "react-icons/gi";

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
    const [ animaisRDF, setAnimaisRDF ] = useState(animais);

    useEffect(() => {
        api.get('/').then((request) => {setGames(request.data.reverse())});
    }, []);

    const showDropdown = useSelector(selectDropdown);
    const showEntrar = useSelector(selectEntrar);
    const showCadastro = useSelector(selectCadastro);
    const showSidebar = useSelector(selectSidebar);
    const search = useSelector(selectSearch);

    // const { QueryEngine } = require('@comunica/query-sparql');
    // const myEngine = new QueryEngine();


    // const dbpediaSearch = async () => {
    //     const { QueryEngine } = require('@comunica/query-sparql');
    //     const myEngine = new QueryEngine();

    //     const query3 =  `
    //                     PREFIX dbc: <http://dbpedia.org/resource/Category:>
    //                     PREFIX dbo: <http://dbpedia.org/ontology/>
    //                     PREFIX dbp: <http://dbpedia.org/resource/>
    //                     PREFIX dbpp: <http://dbpedia.org/property/>
    //                     PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    //                     SELECT ?resource_link ?nome ?descricao WHERE {
    //                         dbp:Jogo_do_Bicho dbo:wikiPageWikiLink ?resource_link .
    //                         ?resource_link dbo:abstract ?descricao .
    //                         ?resource_link dbpp:name ?nome .
    //                     }
    //                     ORDER BY ?nome
    //                     `;
    //     const source = [`http://fragments.dbpedia.org/2016-04/en`];
    //     const bindingStream = await myEngine.queryBindings(query3, {sources: source});
    //     bindingStream.on('data', (bindings: any) => {
    //         // const animal = bindings.entries._root.entries[0][1]?.id.substring(1).split("\"@en")[0];
    //         // const descricao = bindings.entries._root.entries[1][1].id.substring(1).split("\"@en")[0];
    //         console.log(bindings);
    //     });
    //     bindingStream.on('error', console.error);
    //     bindingStream.on('end', () => console.log("Fim!") );
    // }

    // dbpediaSearch();

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
                        const { nomeEn } = animal;

                        if(nomeEn.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
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