const TripOrdersModal = require('../Models/Schemas/orderedtrip');

NewOrderPlaced = async (req, res) => {
    console.log(req.body.record)
    const _res = req.body.record;
    try {
        _data = {
            vendorDeviceID: _res.vendordetails.vDeviceID,
            vendorUserName: _res.vendordetails.vName,
            vendorPhoneNo: _res.vendordetails.vPhoneNo,
            tripId: _res.orderTrip.tripId,
            pickupAddress: _res.orderTrip.pickupAddress,
            pickupTime: _res.orderTrip.pickupTime,
            dropAddress: _res.orderTrip.dropAddress,
            pickUpdate: _res.orderTrip.pickUpdate,
            custName: _res.orderTrip.custName,
            serviceType: _res.orderTrip.serviceType,
            carType: _res.orderTrip.carType,
            custPhoneNo: _res.orderTrip.custPhoneNo,
            custEmailID: _res.orderTrip.custEmailID
        }
        let _NewTripOrder = new TripOrdersModal(_data);

        _NewTripOrder.save()
            .then((result) => {
                return res.send({ status: '100', record: 'Your Order Placed Successfully. Thank You for our service.' });
            }).catch((e) => {
                return res.send({ status: '101', error: `Unable to New Trip data Error : ${e}` })
            })

    } catch (e) {
        console.log(e)
        res.send({ status: '101', error: `Unable to New Trip data Error : ${e}` })
    }
}
module.exports = { NewOrderPlaced }