const axios = require('axios');

module.exports = {
    async request(req, res){

            const { respository } = req.body;   
            const response = await axios.get(`https://api.github.com/users/${respository}`);   

            const { name, description }  = response.data;

            const repos = await ({
                name,
                description,                
            })                
            
    return res.json(repos);
    }
};