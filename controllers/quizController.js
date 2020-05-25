const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz.model');

router.get('/test', (req,res) =>{
    res.json("working")
})

router.post('/findquiz', async (req,res) =>{
    if(!req.body){
        return res.status(400).send('Request body is missing');
    }
    try{
        // console.log(req.body);
        var quiz;
        if(req.body.testType === "private" && req.body.noOfQuiz === "one"){
            quiz = await Quiz.findOne({$and: [{quizId : req.body.quizId, testType : req.body.testType ,quizPassword : req.body.quizPassword, expiryDate: { $gt: Date.now() }}]});
        }
        else if(req.body.testType === "private" && req.body.noOfQuiz === "all"){
            quiz = await Quiz.find({$and: [{testType : req.body.testType ,quizOwner : req.body.Uploadedby, expiryDate: { $gt: Date.now() }}]});
        }
        else{
            quiz = await Quiz.find({$and: [{testType : req.body.testType, expiryDate: { $gt: Date.now() }}]});
        }
        console.log(quiz);
        res.json(quiz);
    }catch(err){
        res.json({message:err});
    }
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
        quizDuration: req.body.quizDuration,
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