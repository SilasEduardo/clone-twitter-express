const express = require('express');
const routs = express.Router();

const postController = require('./src/controller/post.controller')


routs.post('/post', postController.post, (req, res)=>{
       res.send('ola')
});



module.exports = routs