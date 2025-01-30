const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    message: {
        type: String,
        trim: true,
        required: true
    },
    phoneNo: {
        type: Number,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Contact', contactSchema);