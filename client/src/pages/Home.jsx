import React, { useEffect, useState } from 'react'
import father from "../../public/bright-singh.jpg"
import inside from "../../public/inside-church.jpg"
import Footer from './Footer'
import { Link,useLocation } from 'react-router-dom'
import Toggle from './Toggle'
function Home() {
  const location = useLocation();
  const [userName,setUserName] = useState("");
  const [showPopup,setShowPopup] = useState(true)

  useEffect(()=>{
    setUserName(location.state?.userName || "Gust")
    const timer = setTimeout(()=>setShowPopup(false),4000)
    return ()=>clearTimeout(timer)
  },[])
  return (
    <div className='home-div'>
       {showPopup && (
        <div className="popup">
          👋 Hi, {userName}!
        </div>
      )}
        <h2>Our lady of Snow Church</h2>
        <div>
        <img src={inside} alt="image" className='inside-chruch'/>
        </div>
       <div >
        <img src={father} alt="image" className="father-image"/>
       </div>

      <Toggle/>
       <Footer/>
    </div>
  )
}

export default Home