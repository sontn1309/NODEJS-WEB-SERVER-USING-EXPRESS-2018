const shortid=require('shortid');
var express = require('express');
const app = express();
var router = express.Router();
const db=require('../db');
const controller=require('../controller/user.controller');
const validate=require("../validate/user.validate")
router.get('/',controller.index);
router.get('/cookie',(req,res,next)=>{
res.cookie('user-id',2123456);
res.send("hello");
})
router.get('/search', controller.search);
router.get('/create', controller.createget);
router.post('/create',validate.postCreate,controller.createpost);
router.get('/:id',controller.serachId)

module.exports=router;