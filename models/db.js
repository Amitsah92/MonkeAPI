const mongoose = require('mongoose');
require('dotenv/config');


mongoose.connect(process.env.DB_connection, {useNewUrlParser: true}, (err) => {
    if(!err){console.log('Mongodb connected successfully.')}
    else{console.log('Mongodb connection error:' + err)}
});


require('./user.model');
require('./question.model');