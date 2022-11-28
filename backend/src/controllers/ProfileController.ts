const connection = require('../database/connection');

module.exports = {
    async index(request:any, response:any){
        const profile_id = request.headers.authorization;

        const profile_info = await connection('profile').where('id', profile_id).select('*');

        return response.json( profile_info );
    }
}