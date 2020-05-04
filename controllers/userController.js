const express = require('express');
const router = express.Router();
const User = require('../models/user.model');


//Router for unique email and username validation
router.post('/validation', async (req,res) => {
    try{
        const users = await User.find({$or: [{userName : req.body.userName}, {email : req.body.email}]});
        res.json(users.length);
    }catch(err){
        res.json({message:err});
    }
});


//Router for login
router.post('/login', async (req,res) => {
    if(!req.body){
        return res.status(400).send('Request body is missing');
    }
    console.log(req.body);
    try{
        const users = await User.find({$and: [{userName : req.body.userName}, {passWord : req.body.passWord}]});
        res.json(users.length);
    }catch(err){
        res.json({message:err});
    }
});


//Router for SignUp
router.post('/', async (req,res) => {
    if(!req.body){
        return res.status(400).send('Request body is missing')
    }
    console.log(req.body);
    const user = new User({
        fullName: req.body.fullName,
        userName: req.body.userName,
        email: req.body.email,
        passWord: req.body.passWord
    });

    try{
        const saveUser = await user.save();
        res.json('1');
    }
    catch(err){
        res.json({message: err});
    }
});

module.exports = router;