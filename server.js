require('./models/db');
const express = require('express');
const userController = require('./controllers/userController');
const questionController = require('./controllers/questionController');
const app = express();
const bodyPasrser = require('body-parser');
const cors = require('cors');


app.use(bodyPasrser.json());
app.use(cors());
app.listen(9000, () => {
    console.log('Express server started at port : 9000');
});
app.use('/user', userController);
app.use('/question', questionController)