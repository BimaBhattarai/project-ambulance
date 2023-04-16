import React from 'react';
import classes from "./Findhospital.module.css"
const Mynearhospital = ({closemodal}) => {
    return (
        <>
            <div className={classes.backdrop}></div>
            <div className={classes.modal}>
            <h1>Find Nearest Hospital</h1>
            <p>Balendra Shah (Nepali: बालेन्द्र शाह), popularly known as Balen Shah or simply Balen, is a Nepalese rapper, structural engineer and politician.</p>
            <button className='border-solid bg-red-600 px-3 p-2'
            onClick={closemodal}>Accept it</button>
            </div>
        </>
    );

}

export default Mynearhospital;