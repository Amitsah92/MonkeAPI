const mongoose= require('mongoose');

var playerSchema = new mongoose.Schema({
    quizId:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    cCIName:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    totalQuestion:{
        type: Number,
        required: true
    },
    attaimpted:{
        type: Number,
        required: true
    },
    correctAns:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('player', playerSchema)