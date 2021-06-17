const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CraftScheme = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required']
    },
    description: {
        type: String,
        required: [true, 'Description field is required']
    },
    url_image: {
        type: String,
        required: [true, 'Url image field is required']
    },
    cost : {
        type: Number,
        required: [true, 'Cost field is required']
    }
});


const Craft = mongoose.model('craft', CraftScheme);

module.exports = Craft;
