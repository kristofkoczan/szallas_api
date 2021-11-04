const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    username: String,
    accomodationName: String,
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Reservation', reservationSchema);