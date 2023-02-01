export const connection = require('../database/connection');

module.exports = {
    async create(request:any, response:any){

        const { email, password } = request.body;

        const profile = await connection('profile').where('email', email).andWhere('password', password).select('*');

        if (!profile){return response.status(400).json({error: 'Senha ou email inválidos'})};

        return response.json(profile);
    }
}