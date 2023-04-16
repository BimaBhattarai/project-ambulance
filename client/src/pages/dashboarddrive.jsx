
import React from 'react'
import {Col, Row} from "reactstrap";
import SalesChart from '../component/driverdashboard/component/SalesChart';
import ProjectTables from '../component/driverdashboard/component/ProjectTable';
import TopCards from '../component/driverdashboard/component/TopCards';
import Feeds from '../component/driverdashboard/component/Feeds';
// import Blog from '../component/driverdashboard/component/Blog';


const dashboarddrive = () => {
  return (
    <>
    <div className='mb-5 justify-center flex'>

    <h1 className='font-extrabold text-3xl'>Welcome to Dashboard! </h1>
    </div>
    <Row>
     <Col sm="6" lg="3">
       <TopCards
         bg="bg-light-success text-success"
         title="Profit"
         subtitle="Yearly Earning"
         earning="$21k"
         icon="bi bi-wallet"
       />
     </Col>
     <Col sm="6" lg="3">
       <TopCards
         bg="bg-light-danger text-danger"
         title="Expenses"
         subtitle="Expenses"
         earning="$1k"
         icon="bi bi-coin"
       />
     </Col>
     <Col sm="6" lg="3">
       <TopCards
         bg="bg-light-warning text-warning"
         title="Check In"
         subtitle="Number of CheckIn"
         earning="456"
         icon=" bi bi-bag-check"
       />
     </Col>
     <Col sm="6" lg="3">
       <TopCards
         bg="bg-light-info text-into"
         title="Check Out"
         subtitle="Number of oooo"
         earning="210"
         icon="bi bi-bag"
       />
     </Col>
   </Row>
 <SalesChart/>
 {/* <Blog/> */}
 <ProjectTables/>
 <Feeds/>
 

 
 </>
  )
}

export default dashboarddrive