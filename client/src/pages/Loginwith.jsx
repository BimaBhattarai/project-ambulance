import React from 'react';
import { useNavigate } from 'react-router-dom';
import patient from './../Images/emergency.webp'
import picture from './../Images/picture.webp'
import Admin from './../Images/driver.jpg';
import { Navbar } from 'reactstrap';
// import patient from "./../Images/emergency.webp";




const Loginwith = () => {
  const navigate = useNavigate();
  const gotologinpatient =() => {
    navigate("/loginpatient");
    
  };

  const gotodriverlogin =() => {

   
    navigate("/driverlogin");
  };
   

  return (
    <>
   <div className='container'>
    <div className='row'>
    <div className='flex justify-center gap-5 mt-5 '>
        <div className="box-border h-auto w-50 p-4 border-4 ...
        bg-gradient-to-r from-red-500 to-fuchsia-500">
            <h1 className='mb-5 justify-center flex text-2xl  text-cyan-50'>Login For Patient</h1>
            <img src={patient}/>
           <button className='text-2xl font-extrabold
             text-cyan-50 pl-5 mt-5'
             onClick={gotologinpatient}
            >Login For Patients</button>
        </div>
        <div className="box-border h-auto w-50 p-4 border-4 ...
        bg-gradient-to-r from-red-500 to-fuchsia-500">
            <h1 className='mb-5 justify-center flex text-2xl  text-cyan-50'>Login For Driver</h1>
            <img src={Admin}/>
            <button className='text-2xl font-extrabold
             text-cyan-50 pl-5 mt-5' 
             onClick={gotodriverlogin}
            >Login For Driver</button>
        </div>
        <div className="box-border h-auto w-50 p-4 border-4 ...
        bg-gradient-to-r from-red-500 to-fuchsia-500">
             <h1 className='mb-5 justify-center flex text-2xl  text-cyan-50'>Login For Admin</h1>
            <img src={picture}/>
            <button className='text-2xl font-extrabold
             text-cyan-50 pl-5 mt-5'
              // onClick={gotologin1}
            >Login For Admin</button>
        </div>

    </div>
    </div>
   </div>
      
    </>
  )
}

export default Loginwith;
