const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CostumerScheme = new Schema({
    username: {
        type: String,
        required: [true, 'Username field is required']
    },
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    lastname: {
        type: String,
        required: [true, 'State field is required']
    },
    age : {
        type: String,
        required: [true, 'Age field is required']
    },
    email : {
        type: String,
        required: [true, 'Email field is required']
    },
    password : {
        type: String,
        required: [true, 'Password field is required']
    }
});


const Costumer = mongoose.model('costumer', CostumerScheme);

module.exports = Costumer;
