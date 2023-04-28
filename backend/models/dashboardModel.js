const {Schema, model, Types}= require('../connection');

const myschema=new Schema({
    user: {type: Types.ObjectId, ref:'users'},
    entities: [{type: Types.ObjectId, ref:'entity'}],  
    tables: [{type: Types.ObjectId, ref:'table'}],  
    data: Object,
    createdAt: Date,
    updatedAt: Date
});

module.exports=Model('dashboard', myschema);