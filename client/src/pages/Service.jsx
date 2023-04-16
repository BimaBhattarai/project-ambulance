import React from 'react'
import Navbar from '../component/Landing/component/Navbar';
import basic from "../component/Login/Images/basic.jpg";

import airambu from '../component/Login/Images/airambulance.png';
import advance from '../component/Login/Images/download.png';

const Service = () => {
  return (
    <div className='bg-cyan-50 h-auto mb-5'>
      <Navbar/>
      <div className="container">
        <div className='mt-5'>
        <h1 className='mt-5'>----</h1>
        </div>
     
        <div className="row mt-5">
                <div className='col-sm-3 mb-5'>
                    <div class="box-border  rounded-2xl h-800px w-auto p-4 border-4 ...
                     hover:bg-gradient-to-r from-red-500 to-fuchsia-500 hover:text-cyan-50">
                        <div className='img mb-4'>
                            <img src={basic} />
                        </div>
                        <h1 className='mb-3 justify-center flex text-2xl font-semibold'>Basic Ambulance</h1>
                        <p className=''>
                            Basic Life Support Ambulance is for the patients who need medical transportation. It comprises of patient bed, pulse oximetry and oxygen delivery devices.
                        </p>
                        
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div class="box-border rounded-2xl h-auto w-auto p-4 border-4 ...
                        hover:bg-gradient-to-r from-red-500 to-fuchsia-500 hover:text-cyan-50">
                        <div className='img'>
                            <img src={advance} />
                        </div>
                        <h1 className=' justify-center flex text-2xl font-semibold'>Advance Ambulance</h1>
                        <p className=' mb-5'>
                         ALS ambulance is equipped with ventilator, ECG, monitoring devices and paramedic staff.
                        </p>
                        {/* <img src={patient}/> */}
                        
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div class="box-border rounded-2xl h-auto w-auto p-4 border-4 ...
                       hover:bg-gradient-to-r from-red-500 to-fuchsia-500 hover:text-cyan-50">
                       <div className='img mb-4'>
                            <img src={basic} />
                        </div>
                        <h1 className='mb-2 justify-center flex text-2xl font-semibold'>Mortuary Ambulance</h1>
                        <p className=' mb-5'>
                            Mortuary ambulance services are used for the transportation of the dead body. It is also called as Hearse Van.
                        </p>
                        {/* <img src={patient}/> */}
                        
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div class="box-border rounded-2xl h-auto w-auto p-4 border-4 ...
                        hover:bg-gradient-to-r from-red-500 to-fuchsia-500 hover:text-cyan-50">
                        <div className='img '>
                            <img src={airambu} className='max-h-44' />
                        </div>
                        <h1 className=' justify-center flex text-2xl font-semibold'>Air Ambulance</h1>
                        <p className=''>
                             Air ambulances contain ventilators, defibrillators, infusionpum, balloon pumps, oxygen cylinders, trained doctors, & nurses.
                        </p>
                        {/* <img src={patient}/> */}
                        
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='box-border rounded-2xl h-auto w-auto p-4 border-4 ...'></div>
                </div>
                <div className='col-sm-3'>
                    hello
                </div>
                <div className='col-sm-3'>
                    hello
                </div>
            
    
        </div>
       
      </div>
    </div>
    
  )
}

export default Service;
