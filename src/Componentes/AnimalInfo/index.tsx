import { useEffect, useState } from "react";
import styles from "./index.module.css";

interface propsType {
    fotoSrc: string;
    nome: string;
    nomeEn: string;
}

export const AnimalInfo = (props: propsType) => {
    let { fotoSrc, nome, nomeEn } = props;

    const [descricaoAtual, setDescricaoAtual] = useState("");

    const { QueryEngine } = require('@comunica/query-sparql');
    const myEngine = new QueryEngine();

    const dbpediaSearch = async () => {
        const { QueryEngine } = require('@comunica/query-sparql');
        const myEngine = new QueryEngine();

        const query =  `
                        PREFIX dbc: <http://dbpedia.org/resource/Category:>
                        PREFIX dbo: <http://dbpedia.org/ontology/>
                        PREFIX dbp: <http://dbpedia.org/resource/>
                        PREFIX dbpp: <http://dbpedia.org/property/>
                        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                        SELECT ?resource_link ?nome ?descricao WHERE {
                            dbp:Jogo_do_Bicho dbo:wikiPageWikiLink ?resource_link .
                            ?resource_link dbo:abstract ?descricao .
                            ?resource_link dbpp:name ?nome .
                        }
                        ORDER BY ?nome
                        `;
        const source = [`http://fragments.dbpedia.org/2016-04/en`];
        const bindingStream = await myEngine.queryBindings(query, {sources: source});
        bindingStream.on('data', (bindings: any) => {
            const animal = bindings.entries._root.entries[0][1]?.id.substring(1).split("\"@en")[0];
            const descricao = bindings.entries._root.entries[1][1].id.substring(1).split("\"@en")[0];

            if(nomeEn.toLowerCase() === animal.toLowerCase()){
                const novaString = descricao.split(".")[0] + "." + descricao.split(".")[1] + ".";
                setDescricaoAtual(novaString);
            }
        });
        bindingStream.on('error', console.error);
        bindingStream.on('end', () => console.log("Fim!") );
    }

    dbpediaSearch();

    return(
        <div
            className={styles.animal_info}
            style={{backgroundImage: `url(${fotoSrc})`}}
        >
            <div className={styles.info}>
                <h2>
                    {nome.toUpperCase()}
                </h2>
                <p>
                    {descricaoAtual == ""?"Description not found in dbpedia!":descricaoAtual}
                </p>
            </div>
        </div>
    );
}
