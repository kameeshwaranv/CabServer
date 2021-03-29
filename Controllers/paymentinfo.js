const PaymentInfoModel = require('../Models/Schemas/paymentinfo');
addPaymentInfo = async (req, res) => {
    try {
        const referenceNo = req.body.record.RefNo,
            paymentVia = req.body.record.PayVia,
            vendorName = req.body.record.RecFrom,
            vendorId = req.body.record.vendorId;
        _data = {
            paymentId: referenceNo,
            paymentvia: paymentVia,
            receivedFrom: vendorName,
            vendorId: vendorId
        }
        const _PaymentModel = new PaymentInfoModel(_data);
        _PaymentModel.save()
            .then((result) => {
                return res.send({ status: '100', record: 'Your payment details updated successfully.' });
            }).catch((e) => {
                return res.send({ status: '101', error: `Unable to update payment details : ${e}` })
            })
        // return res.send({status:'23'})
    } catch (e) {
        console.log(e)
        res.send({ status: '101', error: `Unable to New Trip data Error : ${e}` })

    }
}
getAllPaymentInfo = async (req, res) => {
    try {
        _limitTo = 50;
        _Where = {};
        PaymentInfoModel.find(_Where).limit(_limitTo).exec(function (err, _resp) {
            if (err)
                return res.send({ status: '101', error: `Unable to New Trip data Error : ${e}` })
            else
                return res.send({ status: '100', record: { list: _resp, count: 20 } });
        })
    } catch (e) {
        console.log(e)
        res.send({ status: '101', error: `Unable to fetch Payment Info data Error : ${e}` })

    }
}
module.exports = { addPaymentInfo, getAllPaymentInfo }