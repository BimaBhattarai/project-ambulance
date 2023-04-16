const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    drivername: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type:String,
        required: true,
    },

    driverphone: {
        type:String,
        required: true,
    },
    driverlicense: {
        type:String,
        required: true,
    },
    ambulancenumber: {
        type:String,
        required: true,
    }, 
    role: {
        type: String,
        default: "driver"
    }
        
});
module.exports = mongoose.model('Driver', driverSchema);