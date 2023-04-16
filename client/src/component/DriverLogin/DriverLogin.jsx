import {useState} from 'react';

import Navbar from '../Landing/component/Navbar';
import axios from 'axios';
import loginImg from '../Login/Images/2'
import { useNavigate, Link } from 'react-router-dom';
// import DriverSignup from './DriverSignup/DriverSign';
const DriverLogin = () => {
  console.log('I m hare');
  const navigate = useNavigate();

  const gototsignup = () => {
    navigate("/driversignup");
  };
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const handleEmail = (e) => {
    setEmail(e.target.value)

  }
  const handleApi = () => {
    console.log({ email,password })
    axios.post('http://localhost:5000/login',{
      email: email,
      password: password
       
    })
    
    .then(result=>{
      alert('Sucessfully')  
     
      localStorage.setItem('token', result.data.token)
     })
     navigate('/dashboarddrive')
    .catch(error=>{
   
      console.log(error)
    })

  }
  const handlePassword = (e) => { 
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    const response = axios.post("http://localhost:5000/driverlogin",
    {email:email, password:password})
    console.log(response)
  };
  

  return (
    <>
    <Navbar />
     <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
    <div className='hidden sm:block'>
        <img className='w-full h-98 object-cover' src={loginImg} alt="" />
    </div>

    <div className='bg-gray-100 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
            <h1 className='justify-center flex text-2xl font-bold'>DriverLogin!</h1>
            <span className='text-4xl font-bold text-center py-6'>Yambu <span 
            className='text-red-800'>Lance</span></span>
            <div className='flex flex-col py-2'>

                <label >Email</label>
                <input 
                className='border p-2' 
                type="email" value={email} 
                onChange={handleEmail}
                />
            </div>
            <div className='flex flex-col py-2'>
                <label>Password</label>
                <input 
                className='border p-2' 
                type="password" 
                value={password} 
                onChange={handlePassword} 
                />
            </div>
            <button className='border w-full my-5 py-2 font-semibold bg-red-600 hover:bg-fuchsia-500 text-white' onClick={handleApi}>Login</button>
            <div className='flex justify-between text-blue-700 underline'>
                
                <Link  to="/driversignup">
                Sign Up
                </Link>
            </div>
        </form>
    </div>
</div>
    </>
  )
}

export default DriverLogin;
