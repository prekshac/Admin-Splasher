const Model = require('../models/userModels');
const {Router}= require('express');
const router=Router();

router.post('/add', (req, res)=> {
    console.log(req.body);
    // res.send('Response from User Router');

    //to save the data
    new Model(req.body).save() 
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res)=> {
    console.log(req.body);
    // res.send('Response from User Router');

    //to save the data
    Model.find({}) 
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

module.exports= router;