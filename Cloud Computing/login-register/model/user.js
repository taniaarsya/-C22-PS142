const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    userName : {
        type : String
    },
    email : {
        type : String
    },
    NoHandphone: {
        type : String
    },
    password: {
        type : String
    },
    confirmpassword: {
        type : String
    }
})

module.exports = mongoose.model('users', userSchema)