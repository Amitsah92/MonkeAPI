const mongoose= require('mongoose');

var quizSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    noOfQuestion:{
        type: Number,
        required: true
    },
    difficultyLevel:{
        type: String,
        required: true
    },
    testType:{
        type: String,
        required: true
    },
    includedQueston:{
        type: String,
        required: true
    },
    expiryDate:{
        type: Date,
        required: true
    },
    createdDate:{
        type: Date,
        default: Date.now
    },
    quizDuration:{
        type: String,
        required: true
    },
    quizId:{
        type: String,
        required: true
    },
    quizPassword:{
        type: String,
        required: true
    },
    quizOwner:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('quiz', quizSchema)