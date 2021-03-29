const mongoose = require('mongoose');
const OrderTrip = mongoose.Schema({
        vendorDeviceID: {
            type: String,
            required: true
        },
        vendorUserName: {
            type: String,
            required: true
        },
        vendorPhoneNo: {
            type: Number,
            required: true,
        },
        tripId: {
            type: String,
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
    }, {
        freezeTableName: true,
        tableName: 'triporders'
    })

module.exports = mongoose.model('triporders', OrderTrip) 