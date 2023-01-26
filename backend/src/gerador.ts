import axios from 'axios';

const generator = axios.create({
    baseURL: "http://localhost:2222",
});

const minutes = 30;

const zeroPad = (num: number, places: number) => String(num).padStart(places,'0');

async function randomNumbers(){
    const data = { 
        number1: zeroPad(Math.floor(Math.random() * 10000),4),
        number2: zeroPad(Math.floor(Math.random() * 10000),4),
        number3: zeroPad(Math.floor(Math.random() * 10000),4),
        number4: zeroPad(Math.floor(Math.random() * 10000),4),
        number5: null
    }

    console.log(data);
    await generator.post('/', data);
}   

setInterval(randomNumbers, minutes*(60000));
