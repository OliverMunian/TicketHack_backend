const mongoose = require('mongoose')

const tripSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number
})

const trip= mongoose.model('trips', tripSchema)

module.exports = trip;