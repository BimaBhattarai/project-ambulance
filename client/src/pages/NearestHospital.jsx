import React, {useState} from 'react'
import Mynearhospital from '../UI/Findhosptal';
import nearhosp from "../component/Login/Images/nearhospi.jpg";


const NearestHospital = () => {
    const [showmodal, setShowModal] = useState(false);

    const closeModal = () =>  setShowModal(false); 

    
  return (
    <>
    <div className='container'>
        <div className='row'>
        <div className='title'>
            <h1 className='justify-center flex mt-3 mb-3 font-extrabold text-4xl'>Find Nearest Hospital</h1>
            <p className='text-center mb-3'>Find nearby hospitals" is a phrase that generally refers to a search query entered into a search engine or mapping application to find the location of the nearest hospital or medical facility. This is useful in emergencies and for people who need medical attention or treatment. Search results typically show location, distance, and other relevant information about nearby hospitals and medical centers. </p>
        </div>
        <div className='col-sm-3'></div>
        <div className='col-sm-5 mb-5'>
            <div className="box-content bg-cyan-50 h-auto w- p-4 border-4 ... border-solid border-orange-700">
                <div className='image '>
                  <h1 className='justify-center flex font-extrabold text-2xl mt-3 mb-3'>View Nearest Hospital</h1>
                    <img src={nearhosp} className='h-52 w-80 jistify-center flex mb-2'/>
                </div>
                <div className='btn '>
                  <button className='rounded ... bg-red-800 h-auto w-100% text-white 
                  mt-3 font-semibold text-1xl  hover:bg-sky-700 ... justify-center py-3 px-4 border-none' onClick={() => setShowModal(true)}>View Hospital</button>
                </div>
                </div>
            </div>
        </div>
    </div>

    {/* <button className='border border-solid bg-red-600 px-5 p-2'
    onClick={() => setShowModal(true)}> Open modal</button> */}
   { showmodal && <Mynearhospital  closemodal = {closeModal} /> } 
<a href='https://www.google.com/maps/place/Bir+Hospital/@27.705029,85.3120568,18.37z/data=!4m6!3m5!1s0x39eb18fffc37200b:0xfcc471d3e99106bc!8m2!3d27.7048249!4d85.3136514!16s%2Fm%2F02vkpjc'>bir Hospital</a>
      
    </>
  )
}

export default NearestHospital
