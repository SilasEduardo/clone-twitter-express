const express = require('express');
const routs = express.Router();
routs.use(express.json())
const postController = require('./src/controller/post.controller')


routs.post('/post', postController.post);



module.exports = routs