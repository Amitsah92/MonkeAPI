const express = require('express');
const router = express.Router();
const Player = require('../models/player.model');

router.get('/', (req,res) =>{
    res.json("Hello")
})

router.post('/', async (req,res) => {
    if(!req.body){
        return res.status(400).send('Request body is missing')
    }
    console.log(req.body);
    const player = new Player({
        quizId: req.body.quizId,
        lastName: req.body.playerDetail.lastName,
        firstName: req.body.playerDetail.firstName,
        age: req.body.playerDetail.age,
        gender: req.body.playerDetail.gender,
        email: req.body.playerDetail.email,
        cCIName: req.body.playerDetail.cCIName,
        phoneNumber: req.body.playerDetail.phoneNumber,
        totalQuestion: req.body.totalQuestion,
        attaimpted: req.body.attaimpted,
        correctAns: req.body.correctAns
    });

    try{
        const savePlayer = await player.save();
        res.json('1');
    }
    catch(err){
        res.json({message: err});
    }
});

router.post('/findPlayer', async (req, res) =>{
    if(!req.body){
        return res.status(400).send('Request body is missing')
    }
    console.log(req.body);
    try{
        const players = await Player.find({quizId : req.body.quizId});
        res.json(players);
    }catch(err){
        res.json({message:err});
    }
})

module.exports = router;