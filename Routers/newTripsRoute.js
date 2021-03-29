const express = require('express');
const router = express.Router();
const { FetchNewTripsCtrl } = require('../Controllers/newtrips');

const routes = {
    // getCustDetails: getCustDetailsCtrl,
    fetchNewTrips: FetchNewTripsCtrl
    // editProfileValues: editProfileValuesCtrl
}

for (const [serviceParam, controllerFn] of Object.entries(routes)) {
    router.post(`/${serviceParam}`, controllerFn)
}
module.exports = router

