const mongoose = require('mongoose');

const accomondationSchema = mongoose.Schema({
    name: String,
    city: String,
    area: Number,
    space: Number,
    price: Number,
    bathrooms: Number
})

module.exports = mongoose.model('Accomodation', accomondationSchema);