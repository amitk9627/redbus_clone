import React from 'react'

const About = () => {
  return (
    <div className='about-wrapper'>
        <div>
            <p className='headingAbout'>NOW, <span style={{fontWeight:"700"}}>GET MORE THAN JUST BUS </span>TICKETS WITH REDBUS!</p>    
            <p className='subheading'>Rent Cabs, Tempo Travellers & Buses with best drivers</p>
            <div className='aboutPlans'>
                <p>
                    <span>
                        <img src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/ryde_car.svg" alt="rtj" />
                    </span>
                    <span>Outstation</span>
                </p>
                <p>
                    <span>
                        <img src="https://s1.rdbuz.com/web/images/homeV2/AboutUs/ryde_car_hourly.svg" alt="jnfg" />
                    </span>
                    <span>Hourly Rental</span>
                </p>
                <p>
                    <span>
                        <img src="https://s2.rdbuz.com/web/images/homeV2/AboutUs/ryde_airport_transport.svg" alt="rsj" />
                    </span>
                    <span>Airport Transfers</span>
                </p>
            </div>
            <button style={{background:"#e55454",padding:"10px",color:"white" , border:"0",marginTop:"20px",fontSize:"1.3rem",borderRadius:"10px"}}>Book Cab / Bus Rental</button>
        </div> 
        <div className='secAbout'>
            <img className='aboutImage' src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/rydePop.svg" alt="lobImage" />
        </div>
      
    </div>
  )
}

export default About
