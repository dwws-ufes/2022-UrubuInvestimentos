import express from "express";

const routes = require("./routes");
var request = require('request');

const generator = express();

generator.use(express.json());
generator.use(routes);

generator.listen(6666);

while(1){
    function randomNumbers(){
        const data = {
            number1: Math.floor(Math.random() * 10000),
            number2: Math.floor(Math.random() * 10000),
            number3: Math.floor(Math.random() * 10000),
            number4: Math.floor(Math.random() * 10000)
        }

        var clientServerOptions
    }   
}

