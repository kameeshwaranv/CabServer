const mongoose = require('mongoose');
const profileModel =
    mongoose.Schema({
        device_id: {
            type: String,
            unique: true,
            index: true,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        phone_no: {
            type: Number,
            required: true
        },
        email_id: {
            type: String,
            required: true
        },
        img_data: {
            type: String
        },
        profile_img_change_status: {
            type: Boolean
        },
        paymentrefid:{
            type:String
        },
        date: {
            type: Date,
            default: Date.now
        }
    })



module.exports = mongoose.model('profile', profileModel) 