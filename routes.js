const express = require('express');
const routs = express.Router();
const postController = require('./src/controller/post.controller')
const userController = require('./src/controller/user.conttoler')
const handlewareHttpError = require('./src/middleware/Handle-http-erro')


routs.use(handlewareHttpError.HandleHttoError)
routs.use(express.json())

routs.post('/post', postController.post);
routs.post('/user', userController.user);



module.exports = routs