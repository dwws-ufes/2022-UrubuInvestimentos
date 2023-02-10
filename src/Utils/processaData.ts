// Recebe uma string data no formato DD/MM/AAAA e retorna uma string processada
// Caso a data seja a de hoje, retorna "HOJE"
// Caso a data seja de ontem, retorna "ONTEM"
// Caso a data seja do mesmo ano, retorna a string no formato DD/MM
// Caso contrario, retorna a data inalterada
export function processaData(data: string): string {
    const dataProcessada: string = data;

    const dataAtual = new Date();
    
    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth() + 1;
    const anoAtual = dataAtual.getFullYear();

    const dataRecebidaSplitada = data.split("/");
    const [ diaRecebido, mesRecebido, anoRecebido ] = dataRecebidaSplitada.map(i => parseInt(i));
    
    // console.log("data atual: ", diaAtual, mesAtual, anoAtual);
    // console.log("data recebida: ", diaRecebido, mesRecebido, anoRecebido);    

    if(diaAtual === diaRecebido && mesAtual === mesRecebido && anoAtual === anoRecebido)
        return "HOJE";
    // else if(ehDiaAnterior(diaAtual, mesAtual, anoAtual, diaRecebido, mesRecebido, anoRecebido))
    //     return "ONTEM";
    else if(anoAtual === anoRecebido)
        return `${diaRecebido}/${mesRecebido}`;

    return dataProcessada;
}