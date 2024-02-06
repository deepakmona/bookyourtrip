import {useEffect} from 'react'
import './Main.css';
// Let import images...
import img1 from "../Assets/img1.webp";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import img5 from "../Assets/img5.jpg";
import img6 from "../Assets/img6.jpg";
import img7 from "../Assets/img7.jpg";
import img8 from "../Assets/img8.jpg";
import img9 from "../Assets/img9.jpg";
import img10 from "../Assets/img10.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

// let me paste the array data......


const Data=[

  {
    id:1,
    imgsrc:img1,
    destTitle:'Bora Bora',
    location:'New Zeland',
    grade:'cultural relax',
    fees:'$700',
    description:'The epitome of romance ,Bora Bora is one of the best travel destination in the world . This place is known for its luxrious stays and advanterous.'
  },


  {
    id:2,
    imgsrc:img2,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade:'cultural relax',
    fees:'$800',
    description:'The epitome of romance ,Bora Bora is one of the best travel destination in the world . This place is known for its luxrious stays and advanterous.'
  },


  {
    id:3,
    imgsrc:img3,
    destTitle:'Great Barier Reef',
    location:'Australia',
    grade:'cultural relax',
    fees:'$900',
    description:'The epitome of romance ,Bora Bora is one of the best travel destination in the world . This place is known for its luxrious stays and advanterous.'
  },


  {
    id:10,
    imgsrc:img10,
    destTitle:'Cappadoicia',
    location:'Turkey',
    grade:'cultural relax',
    fees:'$1000',
    description:'The epitome of romance ,Bora Bora is one of the best travel destination in the world . This place is known for its luxrious stays and advanterous.'
  },



  {
    id:4,
    imgsrc:img4,
    destTitle:'Gaunajuata',
    location:'Mexico',
    grade:'cultural relax',
    fees:'$1100',
    description:'The epitome of romance ,Bora Bora is one of the best travel destination in the world . This place is known for its luxrious stays and advanterous.'
  },


  {
    id:5,
    imgsrc:img5,
    destTitle:'Tajmahal',
    location:'India',
    grade:'cultural relax',
    fees:'$1200',
    description:'The epitome of romance ,Bora Bora is one of the best travel destination in the world . This place is known for its luxrious stays and advanterous.'
  },


  {
    id:6,
    imgsrc:img6,
    destTitle:'Bali Island',
    location:'Indonesia',
    grade:'cultural relax',
    fees:'$1300',
    description:'The epitome of romance ,Bora Bora is one of the best travel destination in the world . This place is known for its luxrious stays and advanterous.'
  },


  {
    id:7,
    imgsrc:img7,
    destTitle:'Angokor Wat',
    location:'Combodia',
    grade:'cultural relax',
    fees:'$1400',
    description:'The epitome of romance ,Bora Bora is one of the best travel destination in the world . This place is known for its luxrious stays and advanterous.'
  },


  {
    id:8,
    imgsrc:img8,
    destTitle:'Dubai',
    location:'UAE',
    grade:'cultural relax',
    fees:'$900',
    description:'The epitome of romance ,Bora Bora is one of the best travel destination in the world . This place is known for its luxrious stays and advanterous.'
  },

  {
    id:9,
    imgsrc:img9,
    destTitle:'Bijing',
    location:'China',
    grade:'cultural relax',
    fees:'$1700',
    description:'The epitome of romance ,Bora Bora is one of the best travel destination in the world . This place is known for its luxrious stays and advanterous.'
  }



]

export default function Main() {
  // Lets create a hook to use scroll animation.....
  useEffect(()=>{
    AOS.init({duration:3000})
  },[])
  

  return (
    <>
    <section className="main container section">

      <div className="secTitle">
        <h3 data-aos='fade-down' className="title">
          Most Visited destinations.
        </h3>
      </div>


    <div className="secContent grid">
      {/* here I'm using high orederd array methed to fethch data  by using 
      array.map()  methed to fetch  each destination once....*/}

      {
   
    Data.map(({id,imgsrc,destTitle,location,grade,fees,description})=>{

      return(
        <div data-aos='fade-up' key={id} className="singleDestination">
          {/* Here it will return single id from the map array */}

        <div className="imageDiv">
        <img src={imgsrc} alt={destTitle} />
        </div>

        <div className="cardInfo">
        <h4 className="destTitle">{destTitle}</h4>
        <span className="continent flex">
        </span>
        <span className="name">{location}</span>

        <div className="fees flex">
          <div className="grade">
            <span>{grade}<small>+1</small></span>
          </div>
          <div className="price"><h5>{fees}</h5></div>
        </div>
        <div className="desc">
          <p>{description}</p>
          </div>

          <button className="btn flex">Details</button>
        </div>

        </div>
      )
        })
      }

    </div>

    </section>
    </>
  )
}
