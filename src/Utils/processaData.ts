// Verifica se o diaAnterior eh ralmente o dia anterior ao diaAtual
// Retorna true caso seja e false caso contrario
function ehDiaAnterior(
    diaAtual: number,
    mesAtual: number,
    anoAtual: number,
    diaAnterior: number,
    mesAnterior: number,
    anoAnterior: number
): boolean {
    if( (diaAnterior === diaAtual - 1) && (mesAtual === mesAnterior) && (anoAtual === anoAnterior)  )
        return true;
    else if( (diaAnterior === 1) && (mesAnterior === mesAtual - 1) && (anoAtual === anoAnterior) )
        return true;
    else if( (diaAnterior === 31) && (diaAtual === 1) && (mesAnterior === 12) && (mesAtual === 1) )
        return true;

    return false;
}

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