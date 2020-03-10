const shortid=require('shortid');
var express = require('express');
const app = express();
var router = express.Router();
const db=require('../db');
const controller=require('../controller/user.controller')
router.get('/',controller.index);

router.get('/search', controller.search);
router.get('/create', controller.createget);
router.post('/create',controller.createpost);
router.get('/:id',controller.serachId)
module.exports=router;