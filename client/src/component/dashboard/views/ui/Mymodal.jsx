import axios from "axios";
import React, {useState} from "react";
import classes from './Mymodal.module.css';
import './Button';
// import GoogleMap from "../Main/GoogleMap";

const Mymodal = ({closeModal}) => {
  
    const [patientName, setPatientName] = useState('');
    const [patientAge, setPatientAge] = useState(0);
    const [pickupLocation, setPickupLocation] = useState('');
    const [destination, setDestination] = useState('');
    const [phoneNumber, setPhonenumber] = useState('');
    const [pickupTime, setPickupTime] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:5000/requestambulance', {
          patientName,
          patientAge,
          pickupTime,
          destination,
          pickupLocation,
          phoneNumber,
          
        });
 alert("Request Send Booked")
      } catch (error) {
        console.log(error);
      }
      alert ("Request Send Booked")
    };
  
  
    return (
      <>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <div className="container">
            <div className="row">
            <div className="col-sm-12 text-white">
        <div className="box box-content h-auto w-5/4 p-4 border-4 ... mb-2 bg-slate-500">
          <form onSubmit={handleSubmit}>
            <label 
            className="
            font-semibold
            text-white 
            mb-1">
            PatientName
            </label>
            <input 
            type="text" 
            placeholder= "PatientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="form-control w-3/4 mb-1"/>
             <label 
            className="font-semibold
            text-white
            mb-2
            ">Patient Age
            </label>
            <input 
            type="text" 
            placeholder="Patient Age"
            value={patientAge}
            onChange={(e) => setPatientAge(e.target.value)}
            className="form-control w-3/4"/>
             <label 
            className="font-semibold
            text-white
            mb-2
            ">Address
            </label>
            <input 
            type="text" 
            placeholder="Address"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="form-control w-3/4"/>
            <label 
            className="font-semibold
            text-white
            mb-2
            ">
            Phone Number
            </label>
            <input 
            type="text" 
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            className="form-control w-3/4"/>
             <label 
            className="font-semibold
            text-white
            mb-2
            ">Destination
            </label>
            <input 
            type="text" 
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="form-control w-3/4"/>
            <label 
            className="font-semibold
            text-white
            mb-2
            ">Pick Time
            </label>
            <input 
            type="datetime-local" 
            value={pickupTime} 
            onChange={event => setPickupTime(event.target.value)} 
            className="text-black form-control w-3/4"/>


           
            <button className="rounded ... bg-red-800 h-auto w-100% text-white 
             mt-2 font-semibold text-1xl  hover:bg-sky-700 ... justify-center py-1 px-2"  >Ambulance Request</button>
             

          </form>

          </div>
        </div>
        {/* <div className="col-sm-6">
        <div className="maps box ">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d28267.576040273747!2d85.3409792!3d27.672576!3m2!1i1024!2i768!4f13.1!5e0!3m2!	1sen!2snp!4v1680616760385!5m2!1sen!2snp"
      
              className=''
              width="100%"
              height="430px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div> */}
            </div>
        </div>
        
        <div className="flex justify-end">
        <button className=' rounded ... bg-red-800 h-auto w-100% text-white 
       mt-2 font-semibold text-1xl  hover:bg-sky-700 ... justify-center ml-9 py-1 px-5'
       onClick={closeModal}>Close</button>

        </div>
        
       {/* <div className="bg-color-red"onClick={closeModal}></div> */}
      </div>
       
      </>
    );
  };
export default Mymodal;