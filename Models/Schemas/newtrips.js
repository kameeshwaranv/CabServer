const mongoose = require('mongoose');
const newTripModel =
    mongoose.Schema({
        tripId: {
            type: String,
            unique: true,
            required: true,
        },
        pickupAddress: {
            type: String,
            required: true,
        },
        pickupTime: {
            type: String,
            required: true
        },
        dropAddress: {
            type: String,
            required: true
        },
        pickUpdate: {
            type: String,
            required: true
        },
        custName: {
            type: String,
            required: true
        },
        serviceType: {
            type: String,
            required: true
        },
        carType: {
            type: String,
            required: true
        },
        custPhoneNo: {
            type: Number
        },
        custEmailID: {
            type: String
        }
    })

module.exports = mongoose.model('newtrips', newTripModel) 