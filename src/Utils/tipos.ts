export interface cartaoType {
    nome: string;
    numero: string;
    expiracao: string;
    cvv: string;
    nickname: string;
}

export enum tiposApostas {
    DEZENA,
    CENTENA,
    MILHAR,
}

export enum tiposDistribuicao {
    CABECA,
    NORMAL,
}

export interface investimentosType {
    tipo: tiposApostas;
    distribuicao: tiposDistribuicao;
    numero: string;
    odd: number;
    valor: number;
    data: Date;
}

export interface userInfoType {
    email: string;
    senha: string;
    nomeUsuario: string;
    saldo: number;
    investimenos: investimentosType[];
    cartoes: cartaoType[];
}