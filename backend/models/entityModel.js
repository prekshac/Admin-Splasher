const {Schema, model}= require('../connection');

const myschema=new Schema({
    name: {type: String, required: true},  
    key: {type: String, required: true},
    realtime: {type: Boolean, default: false},
    icon: String,
    createdAt: Date
});

module.exports=model('entity', myschema);