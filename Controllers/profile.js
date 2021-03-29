const Profile = require('../Models/Schemas/profile');


getCustDetailsCtrl = async (req, res) => {

    const data = req.body.record;
    const header = req.body.static;
    // console.log('INSIDE' + header.deviceId);
    const profiles = new Profile({
        device_id: header.deviceId.trim(),
        name: data.name,
        phone_no: data.phoneNo,
        email_id: data.emailId,
        img_data: '',
        profile_img_change_status: 0
    });
    try {
        const savedStatus = await profiles.save();
        res.send(savedStatus);
    } catch (e) {
        res.send(e)
    }
}
findProfileByIDCtrl = async (req, res) => {
    try {
        console.log(req.body.static)
        const _where = { "device_id": req.body.static.deviceId };
        const _resp = await Profile.findOne(_where);
        // console.log(_resp)
        return res.send({ status: '100', record: _resp });
    } catch (e) {
        console.log(e)
        res.send({ status: '101', error: `Unable to fetch Customer data Error : ${e}` });
    }
}
editProfileValuesCtrl = async (req, res) => {
    try {
        const _where = { "device_id": req.body.static.deviceId };
        const _data = {
            "name": req.body.record.name,
            "phone_no": req.body.record.phoneNo,
            "email_id": req.body.record.emailID
        }
        // console.log(req.body.record);

        Profile.findOneAndUpdate(_where, _data, {new: true}, function (err, response) {
            // console.log(`POST UPDATE ${response}`)
            if (err) return res.send(500, { error: err });
            return res.send({ status: '100', record: response });
        });
    } catch (e) {
        res.send({ status: '101', error: `Unable to insert data Error : ${e}` })
    }
}
module.exports = {  findProfileByIDCtrl, editProfileValuesCtrl }