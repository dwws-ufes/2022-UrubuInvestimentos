export const connection = require('../database/connection');

module.exports = {
    async index(request:any, response:any){
        const games = await connection('games').select('*');

        return response.json(games);
    },
    async create(request:any, response:any){
        const { number1, number2, number3, number4, number5 } = request.body;

        const [id] = await connection('games').insert({
            number1,
            number2,
            number3,
            number4,
            number5,
        },
        ['gameId']
        );

        return response.json(id);
    },
    async delete(request:any, response:any){
        const { gameId } = request.params;

        await connection('games').where('gameId', gameId).delete();

        return response.status(204).send();
    }
}