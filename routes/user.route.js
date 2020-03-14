const shortid=require('shortid');
const multer=require('multer');
const upload=multer({dest:'./public/uploads/'})
var express = require('express');
const app = express();
var router = express.Router();
const db=require('../db');
const controller=require('../controller/user.controller');
const validate=require("../validate/user.validate")
const authMiddlewares=require("../middlewares/auth.middleware")
router.get('/',controller.index);
router.get('/cookie',(req,res,next)=>{
res.cookie('user-id',2123456);
res.send("hello");
})
router.get('/search', controller.search);
router.get('/create', controller.createget);
router.post('/create',
    upload.single('avatar'),
        validate.postCreate,
            controller.createpost);
router.get('/:id',controller.serachId)

module.exports=router;