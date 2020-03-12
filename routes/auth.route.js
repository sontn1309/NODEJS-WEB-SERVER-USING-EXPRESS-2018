const shortid=require('shortid');
const express = require('express');
const app = express();
const router = express.Router();
const db=require('../db');
const controller=require('../controller/auth.controller');
const validate=require("../validate/user.validate");
router.get('/login',controller.login);
router.post('/login',controller.postLogin)
module.exports=router;