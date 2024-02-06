import {useEffect} from 'react'
import './Footor.css';
import vid from "../Assets/img9.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footor = () => {

    // Lets create a hook to use scroll animation.....
    useEffect(()=>{
      AOS.init({duration:2000})
    },[])
  

  return (
   <section className="footer">
    <div className="videoDiv">
      <img className='vedio' src={vid} alt="error" />
    </div>
    <div  className="secContent container">
    <div className="contactDiv flex">
      <div  className="text">
        <small data-aos='fade-up'>KEEP IN TOUCH</small>
        <h2 data-aos='fade-up' >Travel With Us</h2>
      </div>
      <div className="inputDiv flex">
        <input data-aos='fade-up' type="text" placeholder='Enter Email Adress'/>
        <button data-aos='fade-up' className="btn flex" type='submit'>
          SEND
        </button>
      </div>
    </div>

    <div data-aos='fade-up' className="footerCard flex">
      <div className="footerIntro flex">
        <div className="logoDiv1">
          <a href="/" className="logo1 flex">Travel.</a>
        </div>
        <div className="footerparagraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, temporibus error. Delectus ab voluptate quae ipsam adipisci, enim laborum iste rem doloremque sunt in ex quibusdam sed, consequuntur aperiam esse quos deleniti eveniet! Quidem ea non dolor. Eveniet, ducimus! Assumenda mollitia minima tenetur perferendis atque neque sed voluptatibus, aliquid necessitatibus!
        </div>

      </div>

      <div className="footerLinks grid">
        {/* Group one */}
        <div data-aos='fade-up' className="linkgroups">
      <span  className="groupTitle">
        Our Agency
      </span>

      <li className="footerList flex">
      Tourisim
      </li>

      <li className="footerList flex">
        Services
      </li>

      <li className="footerList flex">
        Agency
      </li>

      <li className="footerList flex">
        Insurance
      </li>
      
      <li className="footerList flex">
        Payments
      </li>
        </div>


        <div data-aos='fade-up' className="linkgroups">
          {/* Group second */}
      <span  className="groupTitle">
        Our Partners
      </span>

      <li className="footerList flex">
        Booking
      </li>

      <li className="footerList flex">
        Rent cars
      </li>

      <li className="footerList flex">
        Hostel World
      </li>

      <li className="footerList flex">
        Trivago
      </li>
      
      <li className="footerList flex">
        Tripadviser
      </li>
        </div>


        <div data-aos='fade-up' className="linkgroups">
          {/* Group three */}
      <span className="groupTitle">
        Our Privacy terms
      </span>

      <li className="footerList flex">
        FAQ
      </li>

      <li className="footerList flex">
        Explore
      </li>

      <li className="footerList flex">
        Blog
      </li>

      <li className="footerList flex">
        Destinations
      </li>
      
      <li className="footerList flex">
        Contact Us
      </li>
        </div>


        <div data-aos='fade-up' className="linkgroups">
          {/* Group four */}
      <span className="groupTitle">
        Last Minutes
      </span>

      <li className="footerList flex">
        London
      </li>

      <li className="footerList flex">
        California
      </li>

      <li className="footerList flex">
        Indonesia
      </li>

      <li className="footerList flex">
        Europe
      </li>
      
      <li className="footerList flex">
        Oceania
      </li>
        </div>
      </div>

    <div className="footerDiv flex">
      <small>Best Travel Theme</small>
      <small>Copyright reserved-MDTech-2024</small>
    </div>

    </div>
    </div>
   </section>
  )
}

export default Footor