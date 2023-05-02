const express = require('express');
const app=express();
const port=5000;
const userRouter = require('./routers/userRouter');
const entityRouter = require('./routers/entityRouter');
const cors = require('cors');

app.use(cors({
    origin: [ 'http://localhost:3000,3001']
}));

app.use(express.json());

app.use('/users', userRouter);
app.use('/entity', entityRouter);


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