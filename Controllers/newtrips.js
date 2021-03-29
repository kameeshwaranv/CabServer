const NewTrips = require('../Models/Schemas/newtrips');

FetchNewTripsCtrl = async (req, res) => {
    console.log(req.body.record.limit)
    try {
        let _limitTo, _Where, _last_id;
        if (req.body.record.limit == 0) {
            _limitTo = (req.body.record.lastId == 'Admin') ? 50 : 4;
            _Where = {};
        } else {
            _limitTo = req.body.record.limit;
            _last_id = req.body.record.lastId;
            _Where = { '_id': { '$gt': _last_id } };
        }

        NewTrips.find(_Where).limit(_limitTo).exec(function (err, _resp) {
            if (err)
                console.log(err)
            return res.send({ status: '100', record: { list: _resp, count: 20 } });
        })
    } catch (e) {
        // console.log(e)
        res.send({ status: '101', error: `Unable to New Trip data Error : ${e}` })
    }
}

module.exports = { FetchNewTripsCtrl }