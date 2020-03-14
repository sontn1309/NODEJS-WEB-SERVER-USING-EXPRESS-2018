const shortid=require('shortid');
const express = require('express');
const app = express();
const router = express.Router();
const db=require('../db');
const controller=require('../controller/transfer.controller');

router.get('/create',controller.create);
router.post('/create',controller.postCreate);
module.exports=router;