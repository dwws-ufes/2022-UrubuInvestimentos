import api from '../../services/api';

import { DataFactory } from 'rdf-data-factory';
const N3 = require('n3');

export default function jogosRDF() {
    let games: any[];
    (async function (){
        games = await api.get('/');
    })();
    
    const publishGames = async () => {
        const store = new N3.Store();
        const factory = new DataFactory();

        games.forEach((game:any) => {
            store.addQuad(factory.quad(
                factory.namedNode('localhost:3000/jogos.rdf'),
                factory.namedNode('foaf:weblog'),
                factory.literal(JSON.stringify(game))
            ));
        })
    };

    publishGames();

    return (
        <div/>
    )
}