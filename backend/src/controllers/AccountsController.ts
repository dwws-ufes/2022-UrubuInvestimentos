export const connection = require('../database/connection');

module.exports = {
    async index(request:any, response:any){
        const profile_info = await connection('profile').select('*');

        return response.json( profile_info );
    },
    async create(request:any, response:any){
        const { email, password, age, nickname, CPF, region } = request.body;

        const balance = 1000;

        const [id] = await connection('profile').insert({
            email,
            password,
            age,
            nickname,
            CPF,
            region,
            balance,
        },
        ['id']
        );

        return response.json(id);
    },
    async delete(request:any, response:any){
        const id = request.headers.authorization;

        await connection('profile').where('id', id).delete();

        return response.status(204).send();
    }
}
