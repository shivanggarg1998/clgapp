const mongoose = require('mongoose');


const ContactSchema = mongoose.Schema({
    first_name:{
        type : String,
        required : true
    },
    last_name:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    notes :{
        type : Array,
        required : true,
    }

});


const Contact = module.exports = mongoose.model('Contact',ContactSchema);

