const shortid=require('shortid');
const express = require('express');
const app = express();
const router = express.Router();
const db=require('../db');
const controller=require('../controller/cart.controller');
const validate=require("../validate/user.validate");
router.get('/add/:productId',controller.addToCart);

module.exports=router;