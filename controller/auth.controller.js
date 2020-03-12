const shortid=require('shortid');
var express = require('express');
const md5=require('md5');
const db=require('../db');

module.exports.login= (req, res,next) => {
    res.render('auth/login', {
    users: db.get('users').value()
})};
module.exports.postLogin= (req, res,next) => {
    var email=req.body.email;
    var pass=req.body.password;
    console.log(pass)
    var user=  db.get('users').find({email:email}).value();
    console.log(user)
    if(!user)
    { res.render('auth/login', {
       errors:[
           'User does not exits.'
       ]
    });
    return;
    }
    var hashPassword=md5(pass);
    console.log(hashPassword);
    if(user.password!=hashPassword)
    { res.render('auth/login', {
       errors:[
           'Wrong password'
       ]
    });
    return;
    }
    res.cookie('userId',user.id,{
        signed: true
    });
    res.redirect('/users')};
    ;
