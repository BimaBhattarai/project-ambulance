const mongoose = require('mongoose');

const ambulanceBookingSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  pickupLocation: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  patientAge: {
    type: Number,
    required: true
  },
  pickupTime: {
    type: Date,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true,
    // max:[10,"Invalid Number"]
    
  },
  
});

const AmbulanceBooking = mongoose.model('AmbulanceBooking', ambulanceBookingSchema);

module.exports = AmbulanceBooking;