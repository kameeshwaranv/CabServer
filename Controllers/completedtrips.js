const CompletedTrips = require('../Models/Schemas/completedtrips');

GetCompletedTripsCtrl = async (req, res) => {
    console.log("REACHED KAMESH")
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
        // console.log(_Where, _limitTo, _last_id)

        CompletedTrips.find(_Where).limit(_limitTo).exec(function (err, _resp) {
            if (err)
                console.log(err)
            // return res.send({ '101': `Unable to fetch record ${err}` });
            // console.log(_resp);
            return res.send({ status: '100', record: { list: _resp, count: 20 } });
        })
    } catch (e) {
        console.log(e)
        res.send({ status: '101', error: `Unable to Completed Trip data Error : ${e}` })
    }
}

module.exports = { GetCompletedTripsCtrl }