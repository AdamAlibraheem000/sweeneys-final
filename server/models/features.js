const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featureSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    desc: {
        type: String, 
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

const Features = mongoose.model("features", featureSchema);

module.exports = Features;