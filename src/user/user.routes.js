const { Router } = require('express');
const { addUser, login, findUser } = require('./user.controllers');
const { hashPassword, comparePasswords, tokenAuth } = require('../middleware')
const userRouter = Router();


userRouter.post('/user', /*Middleware goes here*/hashPassword, addUser)
userRouter.post('/login', comparePasswords, login)
userRouter.get('/token', tokenAuth, login)
userRouter.post('/user/login', comparePasswords, findUser);


module.exports = userRouter;