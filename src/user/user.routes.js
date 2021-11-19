const { Router } = require('express');
const { addUser, login, findUser, deleteUser, updateUser } = require('./user.controllers');
const { hashPassword, comparePasswords, tokenAuth } = require('../middleware')
const userRouter = Router();


userRouter.post('/user', /*Middleware goes here*/hashPassword, addUser)
userRouter.post('/login', comparePasswords, login)
userRouter.get('/token', tokenAuth, login)
userRouter.post('/user/login', comparePasswords, findUser);
userRouter.delete('/user/username', deleteUser);
userRouter.put('/user/update', comparePasswords, updateUser);

module.exports = userRouter;