const {Schema, model, Types}= require('../connection');

const myschema=new Schema({
    user: {type: Types.ObjectId, ref:'users'},
    name: {type: String, required: true},  //mandatory field
    email: {type: String, required: true},
    password: {type: String, required: true},
    avatar: String,
    createdAt: Date
});

module.exports=Model('dashboard', myschema);
