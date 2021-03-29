//App Config
const app = require('./app');
const mongoose = require('mongoose')

//COMPASS
//mongodb+srv://vlrcab:vlrcab12345@cluster0.rqq7c.mongodb.net/test 
//MongoDB - Connect check
mongoose.connect(
    'mongodb+srv://vlrcab:vlrcab12345@cluster0.rqq7c.mongodb.net/vendordb?retryWrites=true&w=majority',
    { useNewUrlParser: true },
    () => {
        console.log('Mongoose DB Connected');
    });

//Routers
const postReq = {
    newtrips: require('./Routers/newTripsRoute'),
    profile: require('./Routers/profileRoute'),
    completedtrips: require('./Routers/completedtripsRoute'),
    orderTrip: require('./Routers/orderedTrip'),
    paymentInfo: require('./Routers/paymentInfoRoute')
}

for ([URLPath, routerName] of Object.entries(postReq)) {
    app.use(`/API/${URLPath}`, routerName)
}
/**
 * Listening port 
 */
const PORT = 8100;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server connected to ${PORT} port`);
})