const Post = require('../model/Post.modal')

exports.post = async (req, res) =>{

     try{
          const { body } = req
          

          const postInstance = new Post(body);
          const resposta = await postInstance.save();

          res.status(201).json({"msg":"Salvo com sucesso!", "res":resposta})
     } catch(e) {res.send(e)};
     

}