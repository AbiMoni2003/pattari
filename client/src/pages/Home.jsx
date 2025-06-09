import React from 'react'
import father from "../../public/bright-singh.jpg"
import inside from "../../public/inside-church.jpg"
import Footer from './Footer'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='home-div'>
        <h2>Our lady of Snow Church</h2>
        <div>
        <img src={inside} alt="image" className='inside-chruch'/>
        </div>
       <div >
        <img src={father} alt="image" className="father-image"/>
       </div>

        <label>
              <input type='checkbox'/>
            <div className="toggle" >
                <span className="top-line common"></span>
                <span className="mid-line common"></span>
                <span className="bottom-line common"></span>
                 </div>
              <div className='slide'>
              <h1>Menu</h1>
              <ul>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">login</Link></li>
              <li><Link to="/reset">reset</Link></li>  
              </ul>
              </div>
            </label>
       <Footer/>
    </div>
  )
}

export default Home