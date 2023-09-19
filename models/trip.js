const mongoose = require('mongoose')
const mongoseMoment = require('mongoose-moment')(mongoose)

const tripSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: 'Moment',
    price: Number
})

const trip= mongoose.model('trips', tripSchema)

module.exports = trip;