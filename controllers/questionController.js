const express = require('express');
const router = express.Router();
const Question = require('../models/question.model');

router.post('/questions', async (req,res) => {
    console.log("Question get router" + req.body.Uploadedby);  
    try{
        const Questions = await Question.find({ Uploadedby : req.body.Uploadedby }).sort({ "UploadedDate": -1});
        res.json(Questions);
        console.log(Questions);
    }catch(err){
        res.json("0");
    }
});

router.get('/', (req,res) =>{
    res.json("Hello")
})

router.post('/',async (req,res) => {
    if(!req.body){
        return res.status(400).send('Request body is missing')
    }
    console.log(req.body);   
    const question = new Question({
        question: req.body.question,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4,
        answer: req.body.answer,
        difficulty: req.body.difficulty,
        Uploadedby: req.body.Uploadedby
    });
    try{
        await question.save();
        res.json("1");
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;