const Model = require('../models/dashboardModel');
const {Router}= require('express');
const router=Router();

router.post('/add', (req, res)=> {
    console.log(req.body);
    // res.send('Response from Entity Router');

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

router.get('/getbyuser/:id', (req, res)=> {
    // console.log(req.body);
    //to save the data
    Model.findOne({user : req.params.id})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

router.put('/update/:id', (req, res)=> {
    console.log(req.body);
    // res.send('Response from User Router');

    //to save the data
    Model.findByIdAndUpdate(req.params.id, req.body, {new: true}) 
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});
router.delete('/delete/:id', (req, res)=> {
    console.log(req.body);
    
    Model.findByIdAndDelete(req.params.id) 
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

router.get('/getbyid/:id', (req, res)=> {
    
    Model.findById(req.params.id) 
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

module.exports=router;