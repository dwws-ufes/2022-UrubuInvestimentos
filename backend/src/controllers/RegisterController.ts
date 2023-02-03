export const connection = require('../database/connection');

module.exports = {
    async create(request:any, response:any){
        const { email } = request.body;

        console.log(email);

        const [duplicate] = await connection('profile').where('email', email);
        if(duplicate){return response.status(451).json({ error: "Email já cadastrado!" });}

        console.log(duplicate);

        return response.status(204).send();
    }
}