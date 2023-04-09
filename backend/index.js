const express = require('express');
const app=express();
const port=5000;

app.get('/', (req, res)=>{
    res.send('Working perfectly');
});
app.get('/home', (req, res)=>{
    res.send('Response from home');
});
app.get('/add', (req, res)=>{
    res.send('Response from add');
});
app.get('/getall', (req, res)=>{
    res.send('Get all responding');
});

app.listen( port,()=>{console.log('server started')} );