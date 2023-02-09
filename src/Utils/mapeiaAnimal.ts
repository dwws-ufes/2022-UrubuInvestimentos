export interface animaisType {
    nome: string;
    nomeEn: string;
    src: string;
    descricao: string;
}

export const animais: animaisType[] = [
    {
        nome: "Calango",
        nomeEn: "Calango",
        descricao: "",
        src: "/imagens/animais/calango.jpeg",
    },  
    {
        nome: "Burro",
        nomeEn: "Donkey",
        descricao: "",
        src: "/imagens/animais/burro.jpeg",
    }, 
    {
        nome: "Arara",
        nomeEn: "Arara",
        descricao: "",
        src: "/imagens/animais/arara.jpeg",
    },
    {
        nome: "Lula",
        nomeEn: "Lula",
        descricao: "",
        src: "/imagens/animais/lula.jpeg",
    },
    {
        nome: "Coelho",
        nomeEn: "Rabbit",
        descricao: "",
        src: "/imagens/animais/coelho.jpeg",
    }, 
    {
        nome: "Cavalo",
        nomeEn: "Horse",
        descricao: "",
        src: "/imagens/animais/cavalo.jpeg",
    }, 
    {
        nome: "Galo",
        nomeEn: "Cock",
        descricao: "",
        src: "/imagens/animais/galo.jpeg",
    },  
    {
        nome: "Pavão",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/pavao.jpeg",
    },  
    {
        nome: "Urubu rei",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/urubu-rei.jpeg",
    },  
    {
        nome: "Rato",
        nomeEn: "Rat",
        descricao: "",
        src: "/imagens/animais/rato.jpeg",
    },  
    {
        nome: "Caramelo",
        nomeEn: "Brazilian dog",
        descricao: "",
        src: "/imagens/animais/caramelo.jpeg",
    },  
    {
        nome: "Boto",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/boto.jpeg",
    },  
    {
        nome: "Peixe boi",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/peixe-boi.jpeg",
    },  
    {
        nome: "Capivara",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/capivara.jpeg",
    },  
    {
        nome: "Tatu",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/tatu.jpeg",
    },  
    {
        nome: "Anta",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/anta.jpeg",
    },  
    {
        nome: "Cágado",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/cagado.jpeg",
    },  
    {
        nome: "Ornitorrinco",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/ornitorrinco.jpeg",
    },  
    {
        nome: "Lobo-guará",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/lobo-guara.jpeg",
    },  
    {
        nome: "Pombo",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/pombo.jpeg",
    },  
    {
        nome: "Flamingo",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/flamingo.jpeg",
    },   
    {
        nome: "Pirarucu",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/pirarucu.jpeg",
    },  
    {
        nome: "Jacu",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/jacu.jpeg",
    },  
    {
        nome: "Pica pau",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/pica-pau.jpeg",
    },  
    {
        nome: "Macaco prego",
        nomeEn: "",
        descricao: "",
        src: "/imagens/animais/macaco-prego.jpeg",
    },
];

export const mapeiaNomeAnimal = (n: string | undefined): string => {
    if(n === undefined)
        return "";
        
    const substr = n.substring(2, 4);

    // console.log("substr", substr);

    let indice = Math.floor(Number(substr)/4);

    // console.log("indice", indice);
    // console.log("animal", animais[indice].nome);

    return animais[indice].nome.toUpperCase();
}

export const mapeiaSrcAnimal = (n: string | undefined): string => {
    if(n === undefined)
        return "";

    const substr = n.substring(2, 4);
    // console.log("substring:", substr);
    let indice = Math.floor(Number(substr)/4);
    return animais[indice].src;
}