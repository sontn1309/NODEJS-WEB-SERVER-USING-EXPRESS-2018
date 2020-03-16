const shortid=require('shortid');
const express = require('express');
const app = express();
const router = express.Router();
const controller=require('../../api/cotrollers/product.controller');

router.get("/",controller.api);
router.post("/",controller.create);
module.exports=router;