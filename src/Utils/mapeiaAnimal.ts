export interface animaisType {
    nome: string;
    nomeEn: string;
    src: string;
    descricao: string;
}

export const animais: animaisType[] = [
    {
        nome: "Calango",
        nomeEn: "Lizard",
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
        nomeEn: "Macaw",
        descricao: "",
        src: "/imagens/animais/arara.jpeg",
    },
    {
        nome: "Lula",
        nomeEn: "Squid",
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
        nomeEn: "Rooster",
        descricao: "",
        src: "/imagens/animais/galo.jpeg",
    },  
    {
        nome: "Pavão",
        nomeEn: "Peacock",
        descricao: "",
        src: "/imagens/animais/pavao.jpeg",
    },  
    {
        nome: "Urubu-rei",
        nomeEn: "King vulture",
        descricao: "",
        src: "/imagens/animais/urubu-rei.jpeg",
    },  
    {
        nome: "Rato",
        nomeEn: "Mouse",
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
        nomeEn: "Boto",
        descricao: "",
        src: "/imagens/animais/boto.jpeg",
    },  
    {
        nome: "Peixe-boi",
        nomeEn: "Manatee",
        descricao: "",
        src: "/imagens/animais/peixe-boi.jpeg",
    },  
    {
        nome: "Capivara",
        nomeEn: "Capybara",
        descricao: "",
        src: "/imagens/animais/capivara.jpeg",
    },  
    {
        nome: "Tatu",
        nomeEn: "Armadillo",
        descricao: "",
        src: "/imagens/animais/tatu.jpeg",
    },  
    {
        nome: "Anta",
        nomeEn: "Tapir",
        descricao: "",
        src: "/imagens/animais/anta.jpeg",
    },  
    {
        nome: "Cágado",
        nomeEn: "Tortoise",
        descricao: "",
        src: "/imagens/animais/cagado.jpeg",
    },  
    {
        nome: "Ornitorrinco",
        nomeEn: "Platypus",
        descricao: "",
        src: "/imagens/animais/ornitorrinco.jpeg",
    },  
    {
        nome: "Lobo-guará",
        nomeEn: "Guara wolf",
        descricao: "",
        src: "/imagens/animais/lobo-guara.jpeg",
    },  
    {
        nome: "Pombo",
        nomeEn: "Pigeon",
        descricao: "",
        src: "/imagens/animais/pombo.jpeg",
    },  
    {
        nome: "Flamingo",
        nomeEn: "Flamingo",
        descricao: "",
        src: "/imagens/animais/flamingo.jpeg",
    },   
    {
        nome: "Pirarucu",
        nomeEn: "Arapaima",
        descricao: "",
        src: "/imagens/animais/pirarucu.jpeg",
    },  
    {
        nome: "Jacu",
        nomeEn: "Jacu",
        descricao: "",
        src: "/imagens/animais/jacu.jpeg",
    },  
    {
        nome: "Pica-pau",
        nomeEn: "Woodpecker",
        descricao: "",
        src: "/imagens/animais/pica-pau.jpeg",
    },  
    {
        nome: "Macaco-prego",
        nomeEn: "Capuchin monkey",
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