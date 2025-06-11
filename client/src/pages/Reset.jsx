import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';


function Reset() {

    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("") ;
    const navigate = useNavigate();

    const handleReset =async()=>{

     const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if(!userName || !email || !password){
            setMessage("All Fields are required..")
            setTimeout(()=>setMessage(""),5000)
            return 
        }

          if (!emailRegex.test(email)) {
        setMessage("Please enter a valid email address.");
        setTimeout(() => setMessage(""), 5000);
        return;
    }


        if(password.length<8){
            setMessage("Password should be 8 character..")
            setTimeout(()=>setMessage(""),5000)
            return;
        }

          if (!uppercaseRegex.test(password)) {
    setMessage("Password must contain at least one uppercase letter.");
    setTimeout(() => setMessage(""), 5000);
    return;
    }

    if (!specialCharRegex.test(password)) {
        setMessage("Password must contain at least one special character (e.g., !@#$%^&*).");
        setTimeout(() => setMessage(""), 5000);
        return;
    }

        const secretKey = import.meta.env.VITE_SECRET_KEY;

        const encryptedPassword = CryptoJS.AES.encrypt(password,secretKey).toString()
        
        
        try {
          const res =  await axios.put("https://pattari.onrender.com/user/reset",
                {
               
                Email:email,
                Password:encryptedPassword
                }
            )
            if(res.data.message === "updated.."){
            console.log("reseted");
            navigate("/login")}
        } catch (error) {
            setMessage("Invalid Name and Email..")
            setTimeout(()=>setMessage(""),5000)
            console.log(error.message);
            
        }
    }

  return (
    <div>
        <div className="container">
            <div className="reset-box register-box">
                 <h2>Reset Password</h2>
                <div className="input-group">
                    <label htmlFor="userName">Enter Your Name</label>
                    <input type="text" name='userName' id='userName' placeholder='User Name' onChange={(e)=>setUserName(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="Email">Enter Your Email</label>
                    <input type="email" name='Email' id='Email' placeholder='Email ID' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="">Enter Your New Password</label>
                    <input type="text" name='Password' id='Password' placeholder='New Password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="btn-div">
                 {message && <p style={{color:"red",textAlign:"center"}}>{message}</p>}   
                    <button className='btn green' onClick={handleReset}>Reset</button>
                </div> 
                <div className='link-div'>
                    <span></span>
                    <span></span>
                 <Link to="/register"><p> Register</p></Link> 
                  <Link to="/login"><p>Login</p></Link> 
                  <span></span>  
                  <span></span> 
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Reset