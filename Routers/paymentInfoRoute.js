const express = require('express');
const routers = express.Router();
const { addPaymentInfo, getAllPaymentInfo } = require('../Controllers/paymentinfo');

const routesPay = {
    AddPaymentInfo: addPaymentInfo,
    getPaymentInfo: getAllPaymentInfo
}

for (const [serviceParam, controllerFn] of Object.entries(routesPay)) {
    routers.post(`/${serviceParam}`, controllerFn)
}
module.exports = routers

