import React, { useRef, useState } from "react";
import InputField from '../Layout/Inputfield';
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const addressRef = useRef();
 const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const submitHandeller = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const fullname = nameRef.current.value;
    const address = addressRef.current.value; 

    const response = await axios.post(
      "http://localhost:5000/signup",
      { email: email, password: password, fullname: fullname , address: address},
      { headers: { "Content-Type": "application/json" } }
    );
    alert("User Created Successfully");
   
    navigate('/loginpatient')
  };
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register As New User
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={submitHandeller}>
            <InputField
              name="fullname"
              title="Full Name"
              type="text"
              refer={nameRef}
            />
            <InputField
              name="email"
              title="Email"
              type="email"
              refer={emailRef}
              required
            ></InputField>
            <InputField
              name="password"
              type={visible ? "text" : "password"}
              title="Password"
              autoComplete="password"
              refer={passwordRef}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></InputField>
            <InputField
              name="address"
              title="address"
              autoComplete="address"
              refer={addressRef}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></InputField>

            <button className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-900 hover:bg-blue-700">
              Register
            </button>
            <div >
              <h4>Already have an account?</h4>
              <Link to="/loginpatient" className="text-blue-600 pl-2">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}