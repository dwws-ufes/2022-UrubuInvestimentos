import axios from 'axios';

const generator = axios.create({
    baseURL: "http://localhost:2222",
});

const zeroPad = (num: number, places: number) => String(num).padStart(places,'0');

export default async function randomNumbers(){
    const data = { 
        number1: zeroPad(Math.floor(Math.random() * 10000),4),
        number2: zeroPad(Math.floor(Math.random() * 10000),4),
        number3: zeroPad(Math.floor(Math.random() * 10000),4),
        number4: zeroPad(Math.floor(Math.random() * 10000),4),
    }

    console.log(data);
    await generator.post('/', data);
}   
