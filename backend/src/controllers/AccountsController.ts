export const connection = require('../database/connection');

module.exports = {
    async index(request:any, response:any){
        const profile_info = await connection('profile').select('*');

        return response.json( profile_info );
    },
    async create(request:any, response:any){
        const { email, password, age } = request.body;

        // const duplicate = await connection('profile').where('email', email).select('id').first();
        const [duplicate] = await connection('profile').where('email', email);
        if(duplicate){return response.status(451).json({ error: "Email já cadastrado!" });}

        const [id] = await connection('profile').insert({
            email,
            password,
            age,
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