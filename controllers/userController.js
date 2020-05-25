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
        const user = await User.find({$and: [{userName : req.body.userName}, {passWord : req.body.passWord}]});
        if(user.length === 1){
            res.json(user);
        }  
        else{
            res.json(0);
        }
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

router.patch('/', async(req,res) =>{
    if(!req.body){
        return res.status(400).send('Request body is missing')
    }
    console.log(req.body);
    try{
        if(req.body.oldPassword !== null && req.body.newPassword !== null){
            const finduser = await User.find({$and: [{_id: req.body.userId}, {passWord : req.body.oldPassword}]})
            console.log(finduser.length);
            if(finduser.length === 1){
                const updatedUser = await User.updateOne({_id: req.body.userId},{$set: {userName : req.body.userName ,email : req.body.email,passWord : req.body.newPassword}});
                res.json(updatedUser.nModified);
            }
            else{
                res.json(0);
            }
        }
        else{
            const updatedUser = await User.updateOne({_id: req.body.userId},{$set: {userName : req.body.userName ,email : req.body.email}});
            res.json(updatedUser.nModified);
        }
    }
    catch(err){
        res.json({message: err});
    }
});

module.exports = router;