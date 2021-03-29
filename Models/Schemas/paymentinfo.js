const mongoose = require('mongoose');
const paymentInfo =
    mongoose.Schema({
        paymentId: {
            type: String,
            required: true,
        },
        paymentvia: {
            type: String,
            required: true
        },
        receivedFrom: {
            type: String,
            required: true
        },
        vendorId: {
            type: String,
            required: true
        }
    })

module.exports = mongoose.model('paymentDetails', paymentInfo) 