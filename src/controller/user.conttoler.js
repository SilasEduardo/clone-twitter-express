const User = require('../model/User')

exports.user = async (req, res) =>{

     try{
          const { body } = req
          
          const creanted = await User.create(body);
          res.status(201).json({"msg":"Salvo com sucesso!", "res":creanted})
     } catch(e) {res.handleHttpEroor(e)};
     

}