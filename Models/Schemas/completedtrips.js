const mongoose = require('mongoose');
const completedTripModel =
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
        },
        driverName: {
            type: String
        },
        driverPhoneNo: {
            type: String
        },
        vehicleNo: {
            type: String
        },
        landmark: {
            type: String
        },
        estimatedAmout: {
            type: String
        },
        commissionAmout: {
            type: String
        },
        remarks: {
            type: String
        },
        kmTraveled: {
            type: String
        },
        extraKms: {
            type: String
        }
    })
module.exports = mongoose.model('completedtrips', completedTripModel) 