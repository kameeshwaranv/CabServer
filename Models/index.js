const mongoose = require('mongoose')

async function MangoDBConnect() {
    //MongoDB - Connect check
    return await mongoose.connect(
        'mongodb+srv://vlrcab:vlrcab12345@cluster0.rqq7c.mongodb.net/vendordb?retryWrites=true&w=majority',
        { useNewUrlParser: true },
        () => {
            console.log('Mongoose DB Connected');
        });
}

async function Models(schemaName) {
    Models = MangoDBConnect();

    const _SchemaLists = {
        profile: require('./Schemas/profile')
    }
    _SchemaLists[schemaName]();
    // for (const schemaName of _SchemaLists) {
    //     schemaName(Models)
    // }
}
// initModels();

module.exports = { Models, MangoDBConnect };