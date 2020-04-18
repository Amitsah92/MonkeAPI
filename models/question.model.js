const mongoose= require('mongoose');

var questionSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    option1:{
        type: String,
        required: true
    },
    option2:{
        type: String,
        required: true
    },
    option3:{
        type: String,
        required: true
    },
    option4:{
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    },
    difficulty:{
        type: String,
        required: true
    },
    Uploadedby:{
        type: String,
        required: true
    },
    UploadedDate:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('question', questionSchema)