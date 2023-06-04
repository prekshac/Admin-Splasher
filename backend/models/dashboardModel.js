const {Schema, model, Types}= require('../connection');

const myschema=new Schema({
    user: {type: Types.ObjectId, ref:'users'},
    apiKey: String,  
    authDomain: String,  
    projectId: String,
    storageBucket: String,
    messagingSenderId: String,
    appId: String,
    appName: String,
    updatedAt: Date
});

module.exports=model('dashboard', myschema);