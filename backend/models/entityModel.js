const {Schema, model}= require('../connection');

const myschema=new Schema({
    name: {type: String, required: true},  
    collectionName: {type: String, required: true},
    keyValuePairs: {type: Array, required: true},
    realtime: {type: Boolean, default: false},
    icon: String,
    createdAt: Date,
});

module.exports=model('entity', myschema);