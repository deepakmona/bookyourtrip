import {useState} from 'react'
import './Navbar.css'
import {MdTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

export default function Navbar() {

  const [active, setActive] = useState('navBar')
  // Function to toggle navbar.....
  
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

  // Function to remove navbar.....
  
  const removeNav =()=>{
    setActive('navBar')
  }
  return (
    <>
    <section className="navBarSection">
      <header className="header flex">

        <div className="logoDiv">
          <a href="/" className="logo flex"> 
        <h1> <MdTravelExplore className='icon'/> Travel.</h1>
          </a>
        </div>


        <div className={active}>
          <ul className="navLists flex">
        <li className="navItem">
          <a style={{color:'blue'}} href="/" className="navlink">Home</a>  
        </li>

        <li className="navItem">
          <a href="/" className="navlink">Packages</a>  
        </li>

        <li className="navItem">
          <a href="/" className="navlink">Shop</a>  
        </li>

        <li className="navItem">
          <a href="/" className="navlink">About</a>  
        </li>

        <li className="navItem">
          <a href="/" className="navlink">Pages</a>  
        </li>

        <li className="navItem">
          <a href="/" className="navlink">Contact</a>  
        </li>
        <button className="btnnav">
          <a style={{color:'white'}} href="/">Book Now</a>
        </button>
          </ul>
          <div onClick={removeNav} className="colseNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>
    </section>

    </>
  )
}
