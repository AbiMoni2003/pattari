import React from 'react'
import Toggle from './Toggle'
import Footer from './Footer'

function Events() {
  return (
    <div>
        <Toggle/>
        <h1 className="events-heading">Events</h1>
        <div className="events-div">
            <h1 style={{fontSize:"18px"}}>படைப்பாற்றல்</h1>
          <video src='../../public/gallary/padaipattal.mp4' autoPlay loop muted controls className='padaipattal-video' />  
        </div>
        <Footer/>
    </div>
  )
}

export default Events