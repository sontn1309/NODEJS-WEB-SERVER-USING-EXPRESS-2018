const express=require('express');
const app=express();
const port=3000;
app.get('/',(red,res)=> res.send('say hello'))
app.listen(port,()=> console.log(`Example app listen port on port ${port}`))