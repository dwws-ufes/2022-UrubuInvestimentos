export const connection = require('../database/connection');

module.exports = {
    async index(request:any, response:any){
        const owner = request.headers.authorization;

        const cards = await connection('card').where('owner', owner).select('*');

        return response.json(cards);
    },
    async create(request:any, response:any){
        const { name, number, expiration, CVV } = request.body;
        const owner = request.headers.authorization;

        const [duplicate] = await connection('card').where('number', number);
        if(duplicate){return response.status(451).json({ error: "Cartão já cadastrado!" });}

        const [id] = await connection('card').insert({
            name,
            number,
            expiration,
            CVV,
            owner,
        },
        ['cardId']
        );

        return response.json(id);
    },
    async delete(request:any, response:any){
        const { cardId } = request.params;
        const owner = request.headers.authorization;

        const card = await connection('card').where('cardId', cardId).select('owner').first();

        if(card.owner != owner){return response.status(401).json({ error: 'Operação não permitida.' });}

        await connection('card').where('cardId', cardId).delete();

        return response.status(204).send();
    }
}