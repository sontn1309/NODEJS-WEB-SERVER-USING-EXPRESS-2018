var express = require('express');

const db=require('../db');
const Product=require('../models/product.model');
module.exports.index= (req, res) => {
    // var page=parseInt(req.query.page) || 1;
    // var pagepagination=(page==1)?2:parseInt(req.query.page);
    // var perpage=8;
    // res.render('products/index',
    // {   pagepagination:parseInt(pagepagination),
    //     products: db.get('products').value().slice((page-1)*perpage,page*perpage)
    // })
    Product.find().then((products)=>{
         res.render('products/index',
    {   
        products: products
    })
    })
};
