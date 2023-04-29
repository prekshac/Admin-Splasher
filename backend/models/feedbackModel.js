const {Schema, model}= require('../connection');

const myschema=new Schema({
    name: {type: String, required: true},  
    email: {type: String, required: true},
    password: {type: String, required: true},
    createdAt: Date
});

module.exports=model('feedback', myschema);