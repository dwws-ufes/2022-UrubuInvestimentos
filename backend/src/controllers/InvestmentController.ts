import knex from "knex";

export const connection = require('../database/connection');

module.exports = {
    async index(request:any, response:any){
        const investmentOwner = request.headers.authorization;

        const investments = await connection('investments').where('investmentOwner', investmentOwner).select('*');

        return response.json(investments);
    },
    async create(request:any, response:any){
        const { selectedNumber, value, odds } = request.body;
        const investmentOwner = request.headers.authorization;

        const gameIdMax = await connection.raw('select max(gameId) from "games"');
        const gameIdAtual: number = Number(Object.values(gameIdMax[0])[0]) + 1;

        const [id] = await connection('investments').insert({
            selectedNumber,
            value,
            odds,
            investmentOwner,
            gameIdAtual,
        },
        ['investmentId']
        );

        return response.json(id);
    },
    async delete(request:any, response:any){
        const { investmentId } = request.params;
        const investmentOwner = request.headers.authorization;

        const investment = await connection('investments').where('investmentId', investmentId).select('investmentOwner').first();

        if(investment.investmentOwner != investmentOwner){return response.status(401).json({ error: 'Operação não permitida.' });}

        await connection('investments').where('investmentId', investmentId).delete();

        return response.status(204).send();
    }
}
