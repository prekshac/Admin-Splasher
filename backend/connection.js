const mongoose = require('mongoose');

const url='mongodb+srv://perkschat:perks3110@cluster0.723yzsp.mongodb.net/myMongoDB?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.error(err);
});

module.exports= mongoose;