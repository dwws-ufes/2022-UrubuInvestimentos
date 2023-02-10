import api from '../../services/api'

async function req(){
    return await api.get('/');
};


const JogosRDF = () => {
    
    // const N3 = require('n3');
    // const store = new N3.Store();
    // const { DataFactory } = N3;
    // const { namedNode, literal, defaultGraph, quad } = DataFactory;

    req().then((data) => {
        data.data.forEach((e: any) => {
            // const myQuad = quad(
            //     namedNode('localhost:3000'),
            //     namedNode('foaf:weblog'),
            //     literal(JSON.stringify(e), "en"),
            // );
            // console.log(myQuad.termType);              // Quad
            // console.log(myQuad.value);                 // ''
            // console.log(myQuad.subject.value);         // localhost:3000
            // console.log(myQuad.object.value);          // foaf:weblog
            // console.log(myQuad.object.datatype.value); // JSON
            // console.log(myQuad.object.language);       // en
            //store.addQuads([...quads, myQuad]);
            //console.log(store); 
        });
    });
    // const writer = new N3.Writer({ prefixes: { foaf: 'http://xmlns.com/foaf/0.1/' } });    
    // for (const quad of store) {
    //     console.log(quad);
    // }
    // writer.end((error:any, result:any) => console.log(result));

    return (
        <div className="jogos.rdf">

        </div>
    )
}

export default JogosRDF;