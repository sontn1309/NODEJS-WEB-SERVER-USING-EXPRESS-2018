const shortid=require('shortid');
var express = require('express');

const db=require('../db');

module.exports.index= (req, res) => {res.render('users/index', {
    users: db.get('users').value()
})};
module.exports.search=(req, res) => {
    var name = req.query.name;
    var matchedUsers = db.get('users').value().filter((x) => {
        return x.name.toLowerCase().indexOf(name) > -1;
    })
    res.render('users/index', {
        users: matchedUsers
    })
};
module.exports.createget= (req, res) => {
    console.log(req.cookies);
    res.render('users/create')};
module.exports.createpost=  (req, res) => {
    req.body.id=shortid.generate();
    let x = req.body;
        db.get('users').push(x).write();
        res.redirect('/users')
    
   
};
module.exports.serachId=(req,res)=>
{
    var id=req.params.id;
    var user=db.get('users').find({id : id}).value();
    console.log(user)
    res.render('users/view',{
        user: user
    });
};