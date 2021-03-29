const express = require('express');
const router = express.Router();
const { findProfileByIDCtrl, editProfileValuesCtrl } = require('../Controllers/profile');

const routes = {
    // getCustDetails: getCustDetailsCtrl,
    findProfileByID: findProfileByIDCtrl,
    editProfileValues: editProfileValuesCtrl
}

for (const [serviceParam, controllerFn] of Object.entries(routes)) {
    router.post(`/${serviceParam}`, controllerFn)
}
module.exports = router

