import React from 'react'
import Toggle from './Toggle'

function Loaction() {
  return (
    <div>
         <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.1214119575607!2d77.3155546!3d8.1905229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04fbd935cc07dd%3A0xa1f54630d54ed96d!2sOur%20Lady%20of%20Snows%20Church%2C%20Pattarivilai!5e0!3m2!1sen!2sin!4v1749531012783!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0}}
      allowFullScreen 
      loading="lazy"
    ></iframe>
       

    <Toggle/>
    </div>
  )
}

export default Loaction