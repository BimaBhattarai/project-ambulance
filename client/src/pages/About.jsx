import React from 'react'
import Navbar from '../component/Landing/component/Navbar';
import medi from "../Images/emergency.webp";

const About = () => {
  console.log("About");
  

  return (
    <>
    <Navbar/>
    <div className="container mt-5">

      <div className='mb-5 mt-5'>-</div>
      <div className='text mt-5'>
      <img src={medi}/>
      <h1 className='text-4xl font-extrabold justify-centerflex mb-3'>Yambu<span className='text-red-600'>lance</span></h1>
      <p className='text-center'>A GPS-based technology platform for fast, reliable medical first aid. With an increasing focus on promoting independent living, in the worst-case scenario, access to the nearest ambulance can provide much-needed reassurance. </p>
      
    </div>

    </div>
    

    </>
    
  )
}

export default About;
