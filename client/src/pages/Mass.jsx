import React from 'react'
import Footer from './Footer'
import Toggle from './Toggle'
import matha from "../../public/matha-image.jpg";

function Mass() {
  return (
    <div>
        <div className="mass-image-div">
        <h2>திருப்பலி கால அட்டவணை </h2>
        </div>
        <div className="mass-whole-div">
            <img src={matha} alt="image" />
            <p>ஞாயிறு திருப்பலி : காலை 07.00 மணிக்கு</p>
            <p>திங்கள், செவ்வாய் காலை 06.30 மணிக்கு</p>
            <p>புதன் மாலை 06.30 மணிக்கு சகாய மாதா நவநாள், திருப்பலி</p>
            <p>சனிக்கிழமை காலை 06.45 மணிக்கு சிறார் திருப்பலி</p>
        </div>
        <Toggle/>
      <Footer/>  
    </div>
  )
}

export default Mass