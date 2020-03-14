const shortid=require('shortid');
const express = require('express');
const app = express();
const router = express.Router();
const db=require('../db');
const controller=require('../controller/product.controller');

router.get("/",controller.index);
module.exports=router;