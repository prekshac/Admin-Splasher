const {Schema, model}= require('../connection');

const myschema=new Schema({
    name: {type: String, required: true},  
    email: {type: String, required: true},
    password: {type: String, required: true},
    avatar: {type : String, default: 'avatar_placeholder.png'},
    role:{type: String, default: 'user'},
    createdAt: Date
});

module.exports=model('users', myschema);
