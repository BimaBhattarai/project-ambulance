import React from 'react';
import basic from '../Login/Images/basic.jpg';
import airambu from '../Login/Images/airambulance.png';
import advance from '../Login/Images/download.png';

const Wapper = (props) => {
  return (
    <div className='container mt-3'>
        <div className='box mb-5 box-content h-auto w-98 p-3 border-4 ... 
            bg-gradient-to-r from-red-500 to-fuchsia-500'>
            <div className='other-service'>
                <h1 
                    className='flex justify-center 
                    font-extrabold text-cyan-50 
                    text-2xl mb-3'
                >
                    Other Service
                </h1>
                <p
                    className='text-cyan-50 mb-10'
                >
                We at Yambulance provide our clients with a one-stop solution for all healthcare needs. We deliver an exclusive helpline number for ambulances and other healthcare services, ensuring 100% call answer assurance, 24*7, Nepal, under the same helpline number. One can also find services like Teleconsultation, E- Pharmacy, Diagnostics, Home health care, Elderly Care, mental wellness, etc.
                </p>
               
            </div>
        </div>
       

        {/* Why choose us  */}
        
        <div className='choose mt-3'>
        <h1 className='font-extrabold text-4xl justify-center flex px-5'>Why Choose Us ?</h1>
        <div className='row mt-5'>
            <div className='col-sm-3'>
                <div className='flex '>
                <svg viewBox="h-8 0.25 0.25 23.5 23.5" xmlns="http://www.w3.org/2000/svg" stroke-width="0.5"><path d="M17.5,4.5a1,1,0,0,0-1-1h-2v-2a1,1,0,0,0-1-1h-1a1,1,0,0,0-1,1v2h-2a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h2v2a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1v-2h2a1,1,0,0,0,1-1Z" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.500 16.000 A2.500 2.500 0 1 0 7.500 16.000 A2.500 2.500 0 1 0 2.500 16.000 Z" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.5 13.5L0.5 23.5" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.5 16L23.5 23.5" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.5 18.5H23.5V21.5H0.5z" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.5,18.5h12v-3a2,2,0,0,0-2-2H10a.5.5,0,0,0-.5.5Z" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <h1 className='font-semibold text-xl '>Patients first policy</h1>

                </div>
            </div>
            <div className='col-sm-3'>
                <div className='flex' >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="h-20 0 0 24 24" stroke-width="1"><defs></defs><title>hospital-post-care-2</title><path d="M21.313,11.018a10.486,10.486,0,1,1-8.376-8.34" fill="none" stroke="#2e5ded" stroke-linecap="round" stroke-linejoin="round"></path><polyline points="11.001 7.5 11.001 13 7.614 16.999" fill="none" stroke="#2e5ded" stroke-linecap="round" stroke-linejoin="round"></polyline><path d="M23.5,4a.5.5,0,0,0-.5-.5H20.5V1A.5.5,0,0,0,20,.5H18a.5.5,0,0,0-.5.5V3.5H15a.5.5,0,0,0-.5.5V6a.5.5,0,0,0,.5.5h2.5V9a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V6.5H23a.5.5,0,0,0,.5-.5Z" fill="none" stroke="#2e5ded" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <h2 className='font-semibold text-xl'>Emergency assistance time of 15 minutes or less</h2>

                </div>
            </div>
            <div className='col-sm-3'>
                <div className='flex'>
                    <svg viewBox="h-8 0.25 0.25 23.5 23.5" xmlns="http://www.w3.org/2000/svg" stroke-width="0.5"><path d="M17.5,4.5a1,1,0,0,0-1-1h-2v-2a1,1,0,0,0-1-1h-1a1,1,0,0,0-1,1v2h-2a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h2v2a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1v-2h2a1,1,0,0,0,1-1Z" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.500 16.000 A2.500 2.500 0 1 0 7.500 16.000 A2.500 2.500 0 1 0 2.500 16.000 Z" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.5 13.5L0.5 23.5" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.5 16L23.5 23.5" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.5 18.5H23.5V21.5H0.5z" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.5,18.5h12v-3a2,2,0,0,0-2-2H10a.5.5,0,0,0-.5.5Z" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <h2 className='font-semibold text-xl'>Support 24 hrs</h2>

                </div>
            </div>
            <div className='col-sm-3'>
                <div className='flex'>
                    <svg viewBox="h-8 0.25 0.25 23.5 23.5" xmlns="http://www.w3.org/2000/svg" stroke-width="0.5"><path d="M17.5,4.5a1,1,0,0,0-1-1h-2v-2a1,1,0,0,0-1-1h-1a1,1,0,0,0-1,1v2h-2a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h2v2a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1v-2h2a1,1,0,0,0,1-1Z" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.500 16.000 A2.500 2.500 0 1 0 7.500 16.000 A2.500 2.500 0 1 0 2.500 16.000 Z" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.5 13.5L0.5 23.5" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.5 16L23.5 23.5" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.5 18.5H23.5V21.5H0.5z" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.5,18.5h12v-3a2,2,0,0,0-2-2H10a.5.5,0,0,0-.5.5Z" fill="none" stroke="#0d5cee" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <h2 className='font-semibold text-xl'>Biggest fleet of ambulances across Nepal</h2>

                </div>
            </div>
        </div>
        </div>
        {/* Service   */}
        <div className='service'>
            <div className='justify-center flex mb-5'>
                <h1 className='font-extrabold text-4xl '> Type of Ambulance</h1>
            </div>
            <div className='row'>
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

            </div>
        </div>
      
    </div>
  )
}

export default Wapper;
