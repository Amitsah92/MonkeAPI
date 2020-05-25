require('./models/db');
const express = require('express');
const userController = require('./controllers/userController');
const questionController = require('./controllers/questionController');
const quizController = require('./controllers/quizController');
const playerController = require('./controllers/playerController');
const app = express();
const bodyPasrser = require('body-parser');
const cors = require('cors');

app.use(bodyPasrser.json());
app.use(cors());

var port = process.env.PORT || 9000
app.listen(port, () => {
    console.log('Express server started at port :' + port);
});
app.use('/user', userController);
app.use('/question', questionController);
app.use('/quiz', quizController);
app.use('/player', playerController)