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
    betType: string;
    distribution: string;
    gameIdAtual: number;
    investmentId: number;
    investmentOwner: string;
    odds: number;
    selectedNumber: string;
    value: number;
}

export interface userInfoType {
    email: string;
    senha: string;
    nomeUsuario: string;
    saldo: number;
    investimentos: investimentosType[];
    cartoes: cartaoType[];
}
