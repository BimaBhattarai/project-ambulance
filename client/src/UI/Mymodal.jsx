// import axios from "axios";
import React from "react";
import classes from './Mymodal.module.css';

const Mymodal = ({closeModal}) => {
  
  const BookHandler =()=>{
  
  }
  
  
  
   
    return (
      <>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <div>
          <h1 className="font-semibold text-2xl text-blue-500 mt-2">For Emergency Ambulance Book</h1>
          <p className="text-center">One Click and Medulance Ambulance comes right in front of the door for help.</p>
        </div>
        <form className="flex flex-col mt-3" onSubmit={BookHandler} >
        <label className="font-bold text-xl">Phone Numbers</label>
        <input type="text" placeholder=" Your Phone Number" name="phonenumber"  className="border-red text-center h-8 mt-3 mb-2" />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-50%'
       >Submit</button>
         
        </form>
        
        
        <button className=' rounded ... bg-red-800 h-8 w-100% text-white 
       mt-2 font-semibold text-1xl  hover:bg-sky-700 ... justify-center px-5'
       onClick={closeModal}>Close</button>
       <div className="bg-color-red"onClick={closeModal}></div>
      </div>
       
      </>
    );
  };
export default Mymodal;