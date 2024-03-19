const connection = require('./connection');
const express = require('express')
const cors = require('cors');
const routes=express.Router();

const userController=require('./controllers/user/userController');
const fetchUserDetails = require('./middlewares/fetchUserDetails');
const menuCardController = require('./controllers/menuCardController/menuCardController');
// routes.post('/register',userController.registeruser)
//userRoutes
routes.post('/register',userController.registerUser)
routes.post('/login',userController.login)
routes.get('/fetchuser',fetchUserDetails,userController.fetchUser)

//menuCardRoutes
routes.post('/addMenuCard',fetchUserDetails,menuCardController.addMenuCard)
routes.delete('/deleteMenuCard/',fetchUserDetails,menuCardController.deleteMenuCard)
routes.put('/updateMenuCard/',fetchUserDetails,menuCardController.updateMenuCard)




module.exports=routes