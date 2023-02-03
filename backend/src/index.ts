import express from "express";
import cors from "cors";
import generator from "./gerador";

const minutes = 30;

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(2222);

setInterval(generator, minutes*(60000));
