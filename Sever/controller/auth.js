require("dotenv").config();
const bcrypt= require('bcrypt');
const User = require('../model/User')
const jwt = require('jsonwebtoken');
const Driver = require('../model/Driver');
const AmbulanceBooking = require('../model/AmbulanceBooking');
//signup 
  exports.getSignup= async(req, res, next)=>{
    try{
      const fullname = req.body.fullname;
      const email = req.body.email;
      const password = req.body.password;
      const address = req.body.address;
      
  
      const emailExist = await User.findOne({email: email});
      
      if(emailExist){
        return res.status(406).json({
          message: 'Email already exists'
        });
      }


      const hashedpassword = await bcrypt.hash(password,12)
      const user = new User({
        fullname: fullname,
        email: email,
        password: hashedpassword,
        address: address
      });
      const createdUser = await user.save();
      res.status(200).json({
        user:{email: createdUser.email, _id: createdUser.id}
      })
       
      console.log('User Created')
     }
catch (error) {
  console.log(error)
};
  };

  //For user Login
  exports.getLogin = async(req, res, next) => {
    try{
      const email = req.body.email;
      const password = req.body.password;
      const user = await User.findOne({email: email});
      if (!user){
        return res.status(400).json({message: "User not found"});
        console.log("not found");
       }
       const passwordMatch = await bcrypt.compare(password, user.password);
       if (passwordMatch){
        const token = jwt.sign(
          {
            email: user.email,
            userId: user._id.toString(),
          },
          process.env.JWT_SECRET,
         
        );
        return res.status(200).json({ token: token, id: user.id })
       }
       else {
        return res.status(200).json({errors: "Password is incorrect"});
       }
     
       
      }
    catch (error) {
      console.log(error)
    };
  };



// Driver Signup
exports.postDriverSignup = async(req, res, next)=>{
  try{
    const drivername = req.body.drivername;
    const email = req.body.email;
    const password = req.body.password;
    const driverlicense = req.body.driverlicense;
    const driverphone = req.body.driverphone;
    const ambulancenumber = req.body.ambulancenumber;

    const emailExist = await Driver.findOne({email: email});
    
    if(emailExist){
      return res.status(406).json({
        message: 'Email already exists'
      });
    }

   
    const hashedpassword = await bcrypt.hash(password,12)
    const driver = new Driver({
      drivername: drivername,
      email: email,
      password: hashedpassword,
      driverphone: driverphone,
      driverlicense: driverlicense,
      ambulancenumber: ambulancenumber,
    });
    const createdDriver = await driver.save();
    res.status(200).json({
      driver:{email: createdDriver.email, _id: createdDriver.id}
    })
     
    console.log('Driver Created')
   
   }
   
  
catch (error) {
console.log(error)
};
};


  // For DriverLogin
  exports.getDriverLogin = async(req, res, next) => {
    try{
      const email = req.body.email;
      const password = req.body.password;
      const driver = await Driver.findOne({email: email});
      if (!driver){
        return res.status(400).json({message: "Driver not found"});
        console.log("not found");
       }
       const passwordMatch = await bcrypt.compare(password, driver.password);
       if (passwordMatch){
        const token = jwt.sign(
          {
            email: driver.email,
            role:role,
            userId: driver._id.toString(),
          },
          process.env.JWT_SECRET,
         
        );
        return res.status(200).json({ token: token, id: driver.id })
       }
       else {
        return res.status(200).json({errors: "Password is incorrect"});
       }
     
       
      }
    catch (error) {
      console.log(error)
    };``
  };

  
  exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
      console.log(err);
    });
  };
  