import React from 'react';
import { useNavigate } from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Ribbon from './container/Ribbon';
import About from './container/About';
import Contact from './container/Contact';

const Home = () => {
  const navigate = useNavigate();
  const link = () => {
    navigate("/search");
  }
  return (
    <>
      <Navbar />
      <div id="main">
        <div>
          <h1 className='heading'>India’s No. 1 Bus Ticket Booking Site</h1>
          <form className='input-wrapper' onClick={() => link()}>

            <div className='single-InputField'>
              <label >FROM</label>
              <input type='text' />
            </div>

            <div className=' arrow'>
              <div>&hArr;</div>
            </div>

            <div className='single-InputField'>
              {/* to */}
              <label>TO</label>
              <input type='text' />
            </div>

            <div className='single-InputField' >
              <label>DATE</label>
              <input type='date' />
            </div>
            <div style={{ background: "#e55454" }} className='sButton single-InputField'>
              <button type='submit' >Search Buses</button>
            </div>

          </form>
        </div>
      </div>

      <Ribbon />
      <About />
      <Contact />
      <Footer />
    
    </>
  )
}


export default Home;
