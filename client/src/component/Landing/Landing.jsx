import React, {useState} from 'react'
import Navbar from '../Landing/component/Navbar';
import Wapper from '../Landing/Wapper';
import ambu from './../Login/Images/about.jpg';
import Mymodal from '../../UI/Mymodal';

export default function Landing(props) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  

  return (
   <>
   {/* <Login /> */}
    <Navbar/>
    <div className='container mt-5'>
    <div className="row">
      <div className='col-sm-6 mt-3'>
      <div className=' mt-3 px-5 '>
      <div className='mt-3 mb-5 text-cyan-50'>-</div>
      <span className='justify-center  font-extrabold text-4xl'>Yambu</span>
      <span className='center font-extrabold text-4xl text-red-800'>Lance</span>

      </div>
       
       <h2 className='font-semibold text-2xl text-blue-500 mt-2'> For Emergency Medical Service </h2>
       <p className='mt-3'>Help / Rescue patients in an emergency with one click.<br/> A Yambulane ambulance is just outside calling for help. </p>
       <div className='btn'>
       <button className=' rounded ... bg-red-800 h-auto w-100% text-white 
       mt-2 font-semibold text-1xl  hover:bg-sky-700 ... justify-center ml-9 py-1 px-5'
        onClick={() => setShowModal(true)}>Book Now</button>
        {showModal && <Mymodal closeModal={closeModal} />}
       </div>
       
      </div>
      <div className='col-sm-6 mt-8'>
        <div className='Image'>
          <img src={ambu}/>
        </div>
      </div>
    </div>

    </div>
    <Wapper />
    

   </>
  )
}

