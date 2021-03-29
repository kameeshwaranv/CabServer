const express = require('express');
const router = express.Router();
const { GetCompletedTripsCtrl } = require('../Controllers/completedtrips');

const routes = {
    getCompletedTrips: GetCompletedTripsCtrl
}

for (const [serviceParam, controllerFn] of Object.entries(routes)) {
    router.post(`/${serviceParam}`, controllerFn)
}
module.exports = router