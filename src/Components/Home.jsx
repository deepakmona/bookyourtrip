import {useEffect} from 'react';
import './Home.css';
import vidd from "../Assets/img10.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Home() {

  // Lets create a hook to use scroll animation.....
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])


  return (
    <>
    <section className="home">
      <div className="overlay"></div>
    <img className='frontimg' src={vidd} alt="error" />
      

    <div data-aos='fade-up' className="homeContent container">
      <div className="textDiv">
        <span  className="smallText">
          Our Packages
        </span>
      <h1  className="homeTiltle">Search Your Holidays</h1>
      </div>
      <div data-aos='fade-up' className="cardDiv grid">
        <div className="destinationInput">
          <label htmlFor="city">Search Your destination</label>
          <div className="input flex">
            <input type="text" placeholder='Enter 
            your Name Here .....'  />
          </div>
        </div>


        <div className="dateInput">
          <label htmlFor="date">Select Your Date:-</label>
          <div className="input flex">
            <input type="date"/>
          </div>
        </div>


        <div className="priceInput">
          <div className="label_total flex">
            <label htmlFor="price">Total Price:</label>
            <h3 className="total">$5000</h3>
          </div>

        <div className="input flex">
          <input type="range" max="5000" min="1000" />
        </div>

        <div className="btn">Submit</div>


        </div>

      </div>


    </div>

    </section> 
    </>
  )
}
