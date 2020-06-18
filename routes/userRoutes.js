const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/User');
const userController = require('../controllers/userControllers');
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const path = require('path')
const flash = require('connect-flash');
const session = require('express-session')
const passport = require('passport')
let MongoStore = require('connect-mongo')(session)
const {check,validationResult}= require('express-validator')
const axios = require ('axios')
require('dotenv').config()
require('../lib/passport')

//Making sure the user can view certain pages only if they are logged in----
const auth = (req,res,next)=>{
  if(req.isAuthenticated()){
    next()
  }else{
    res.redirect('/no')
  }
}

//All get routes

router.get('/', userController.home);
router.get('/movies',auth, userController.getMovies);
router.get('/random',auth, userController.getRandom);
router.get('/login', userController.login);
router.get('/options',auth, userController.options);
router.get('/register', userController.register);
router.get('/logout', userController.logout);

module.exports = router;

