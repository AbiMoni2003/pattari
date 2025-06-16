import React, { useEffect, useState } from 'react'
import father from "../../public/bright-singh.jpg"
import inside from "../../public/inside-church.jpg"
import Footer from './Footer'
import { Link,useLocation } from 'react-router-dom'
import Toggle from './Toggle'
import youtube from "../../public/you-tube.svg"
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
          👋 Hi, {userName} 😊!
        </div>
      )}
        <h2>Our lady of Snow Church</h2>

        <div>
        <img src={inside} alt="image" className='inside-chruch'/>
        </div>
        <div className="home-history">
          <h3 className='home-heading'>தூய பனிமய அன்னை ஆலயம் - பட்டரி விளை | CHURCH OF OUR LADY OF SNOWS - PATTARIVILAI</h3>
          <p>இறை மக்கள் அனைவரையும் பட்டரிவிளை, தூய பனிமய அன்னை ஆலய இணையதளத்துக்கு அன்புடன் வரவேற்கிறோம். </p>
          <p>பட்டரிவிளை மண்ணில் ஒரு குடும்பத்தால் தோன்றிய கிறிஸ்தவம் 350 க்கும் மேற்பட்ட குடும்பங்களுடன் ஆலமரம் போல் இன்று செழித்தோங்கி திகழ்கிறது. இவ்வாறு பட்டரிவிளை பங்கானது நாளொரு மேனியும் பொழுதொரு வண்ணமாக வளர்ந்து வருகின்றது. <Link to="/history">Read More</Link></p>
        </div>
        <div className="father-bio">
          <img src={father} alt="image" className='father-image'/>
          <p>Fr. Bright Singh <br/>
              Date of Ordination:	01.05.2022 <br/>
              Parish Priest ( June 2022 onwards )</p>
          <p>
            Pattarivilai, Tamil Nadu, India<br/>
            Diocese of Kuzhithurai
          </p>
        </div>
        <div className="home-utube-div">
         <Link to="https://www.youtube.com/@olspattarivilai" target='_blank'><img src={youtube} alt="image" /></Link> 
          <p>Watch Sunday & Special Masses on our youtube channel  @olspattarivilai</p>
          <p>Sunday Mass at 7:00am Live on youtube</p>
        </div>
       

      <Toggle/>
       <Footer/>
    </div>
  )
}

export default Home