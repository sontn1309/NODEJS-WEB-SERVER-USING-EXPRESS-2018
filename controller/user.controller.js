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
module.exports.createget= (req, res) => {res.render('users/create')};
module.exports.createpost=  (req, res) => {
    req.body.id=shortid.generate();
    let x = req.body;
    var err=[];
    if(!x.name)
    {
        err.push("Name is required!")
    }
    if(!x.phone)
    {
        err.push("Phone is required!")
    }
    if(err.length)
    {
        res.render('users/create',{
            errors: err,
            values:x
        });
        return
    }else{
        db.get('users').push(x).write();
        res.redirect('/users')
    }
   
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