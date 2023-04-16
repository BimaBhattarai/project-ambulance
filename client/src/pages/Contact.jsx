import React from "react"
import Navbar from "../component/Landing/component/Navbar";


const Contact = () => {
    
  return (
    <>
    <Navbar/>
    <div className=" bg-stone-900	">
    <div className="container">
    <div className="row">
     <div className="mt-5 mb-5">--</div>
        <div>
          <h1 className="mt-5 mb-3 justify-center flex font-bold text-5xl underline text-white">Contact-Us</h1>
          <h2 className="justify-center flex mb-5 font-semibold text-3xl text-white">We need to help</h2>
        </div>
        <div className="col-sm-6 text-white">
        <div className="box box-content h-auto w-3/4 p-4 border-4 ... mb-4 bg-slate-500">
          <form 
          action="https://formspree.io/f/mknapekv"
          method="POST">
            <label 
            className="
            font-semibold
            text-white 
            mb-2">
            FirstName
            </label>
            <input 
            type="text" 
            required
            className="form-control w-3/4"/>
            <label 
            className="font-semibold
            text-white
            mb-2
            ">
            LastName
            </label>
            <input 
            type="text" 
            required
            className="form-control w-3/4"/>
            <label 
            className="font-semibold
            text-white
            mb-2
            ">Email
            </label>
            <input 
            type="email"
            required 
            className="form-control w-3/4"/>
            <label 
            className="font-semibold
            text-white
            mb-2
            ">Message
            </label>
            <input type="text" required placeholder="Message" className="form-control w-3/4 p-3 mb-3"/>
            <button className="rounded ... bg-red-800 h-auto w-100% text-white 
             mt-2 font-semibold text-1xl  hover:bg-sky-700 ... justify-center ml-9 py-1 px-5" type="submit" >Send</button>

          </form>

          </div>
        </div>
        
        {/* Maps column */}
        <div className="col-sm-6">
        <div className="maps box ">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d28267.576040273747!2d85.3409792!3d27.672576!3m2!1i1024!2i768!4f13.1!5e0!3m2!	1sen!2snp!4v1680616760385!5m2!1sen!2snp"
      
              className=''
              width="100%"
              height="430px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    
      <hr></hr>
    </div>
      
      
    </div>
    </>
    
  );
}

export default Contact
