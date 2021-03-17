const mongoose = require('mongoose');

module.exports = app => {
    mongoose.connect('mongodb://localhost:27017/cart_db', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }).then(res => console.log("Successfully connected to mongodb").catch(err => 
        console.log(err)));
    
    // make mongoose to use the global promise library
    mongoose.Promise = global.Promise;

    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);
    if(app) {
        app.set("mongoose", mongoose);
    }
};

function cleanup() {
    mongoose.connection.close(() => {
        process.exit(0);
    });
}