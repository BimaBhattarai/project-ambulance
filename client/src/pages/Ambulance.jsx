import React, {useState} from 'react'
import Mymodal from "../component/dashboard/views/ui/Mymodal";
// import Button from '../UI/Button';
import image from "../component/Login/Images/btnemer.jpg";
import nearhosp from "../component/Login/Images/nearhospi.jpg";

const Ambulance = (props) => {
  const [showModal, setShowModal] = useState(false);
  const AmbulanceHandler = () => {
    
  }

  const closeModal = () => setShowModal(false);
  return (
    <>
    <div className=' body '>
    <div className=''>
    
        <div className='row mt-5 mb-5'>
        <div className='col-sm-3'></div>
            <div className='col-sm-6'>
            {/* <h1>Book an Ambulance</h1> */}
                <div className="box-content h-auto w-80 p-5 border-4 ...  border-orange-700  bg-cyan-50">
                <div className='image'>
                  <h1 className='justify-center flex font-extrabold text-2xl mb-3  hover:text-red-600 ... cursor-pointer'>Book an Ambulance</h1>
                    <img src={image} className='h-52 w-80 jistify-center flex'/>
                </div>
                <div className='btn '>
                  <button className='rounded ... bg-red-800 h-auto w-100% text-white 
                  mt-2 font-semibold text-1xl  hover:bg-sky-700 ... justify-center py-3 px-4 pl-20' onClick={() => setShowModal(true)}>Ambulance Book</button>
                </div>
                </div>
            </div>
            {/* <div className='col-sm-5 mb-5'>
            <div className="box-content bg-cyan-50 h-auto w- p-4 border-4 ... border-solid border-orange-700">
                <div className='image '>
                  <h1 className='justify-center flex font-extrabold text-2xl mt-3 mb-3'>View Nearest Hospital</h1>
                    <img src={nearhosp} className='h-52 w-80 jistify-center flex mb-2'/>
                </div>
                <div className='btn '>
                  <button className='rounded ... bg-red-800 h-auto w-100% text-white 
                  mt-3 font-semibold text-1xl  hover:bg-sky-700 ... justify-center py-3 px-4 ' onClick={() => setShowModal(true)}>Ambulance Book</button>
                </div>
                </div>
            </div> */}
            

            {showModal && <Mymodal closeModal={closeModal} />}
            
            
            {/* <div className='col-sm-3'>Hello2</div>
            <div className='col-sm-3'>Hello3</div> */}
        </div>
    </div>

    </div>

    </>
   
  )
}

export default Ambulance
