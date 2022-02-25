const mongoose = require('mongoose')

const dataschema = new mangoose.Schema({

    name: {
        type: String,
        required: true
    },
    Dob: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    Pan: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('DATA',dataschema)
