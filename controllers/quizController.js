const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz.model');

router.get('/test', (req,res) =>{
    res.json("working")
})

router.post('/', async (req,res) => {
    var Id = Math.floor(Math.random() * (+99999999- +10000000))+ +10000000;
    var password = Math.random().toString(36).slice(-8);
    if(!req.body){
        return res.status(400).send('Request body is missing')
    }
    const quiz = new Quiz({
        title: req.body.title,
        noOfQuestion: req.body.noOfQuestion,
        difficultyLevel: req.body.difficultyLevel,
        testType: req.body.testType,
        includedQueston: req.body.includedQueston,
        expiryDate: req.body.expiryDate,
        createdDate: req.body.createdDate,
        quizId: Id,
        quizPassword: password,
        quizOwner: req.body.quizOwner
    });

    try{
        const saveUser = await quiz.save();
        res.json({ "Id": Id,"password": password
     });
    }
    catch(err){
        res.json({message: err});
    }
});

module.exports = router;