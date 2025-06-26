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
        <iframe width="400px" height="400px"
        src='../../public/gallary/padaipattal.mp4'
        className='padaipattal-video'
      ></iframe>
        </div>
        <Footer/>
    </div>
  )
}

export default Events