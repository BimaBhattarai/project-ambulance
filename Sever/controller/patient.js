const AmbulanceBooking = require('../model/AmbulanceBooking')
exports.reqAmbulance = async(req, res)=>{
    const {
        patientName,
        phoneNumber,
        pickupLocation,
        destination,
        pickupTime,
        patientAge
      } = req.body;
    
  

    try {const newBooking = new AmbulanceBooking({
        patientName,
        patientAge,
        pickupLocation,
        phoneNumber,
        destination,
        pickupTime
      });
        await newBooking.save();
        res.status(200).json(newBooking);
      } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
      }
    
}
