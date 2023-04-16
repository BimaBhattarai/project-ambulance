import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const navigate = useNavigate();
  const gotologin =() => {
    navigate("/loginwith");
  };
    let Links =[
      {name:"Home",link:"/"},
      {name:"About",link:"/about"},
      {name:"Service",link:"/services"},
      {name:"Contact",link:"/contact"},               
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='position-fixed'>
<div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
       <span className='text-3xl font-bold text-center'>Yambu <span 
            className='text-red-800'>Lance</span></span>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full  font-semibold md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 ':'top-[-390px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-red-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <button className='rounded ... bg-red-800 h-auto w-100% text-white 
       mt-2 font-semibold text-1xl  hover:bg-sky-700 ... justify-center ml-9 py-1 px-3'
      onClick={gotologin}>Login</button>
       
      </ul>
      </div>
    </div>
    </div>
    
  )
}

export default Navbar;