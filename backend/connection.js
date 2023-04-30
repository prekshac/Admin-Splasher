const mongoose = require('mongoose');

const url='mongodb+srv://perkschat:<password>@cluster0.723yzsp.mongodb.net/dashboardDB?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.error(err);
});

module.exports= mongoose;
