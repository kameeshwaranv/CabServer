const express = require('express');
const router = express.Router();
const { NewOrderPlaced } = require('../Controllers/orderedTrip');

const routes = {
    // getCustDetails: getCustDetailsCtrl,
    NewOrder: NewOrderPlaced
    // editProfileValues: editProfileValuesCtrl
}

for (const [serviceParam, controllerFn] of Object.entries(routes)) {
    router.post(`/${serviceParam}`, controllerFn)
}
module.exports = router

