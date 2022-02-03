const User = require ('../models/User');

module.exports ={
    async store(req,res){
        // Coloca todos os campos para criar uma conta
        const { name, email } = req.body;
        const user = await User.create({name, email});
        // Retorna em forma de .json
        return res.json(user);
    }
};