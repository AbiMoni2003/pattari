import { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import  {phoneValid}  from '../validations/validation';



function Register() {

const [userName,setUserName] = useState("");
const [phone,setPhone] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [message,setMessage] = useState("")
const navigate = useNavigate();





const handleRegister=async()=>{

    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    
     if(!userName || !email || !password || !phone){
            setMessage("All the fiels are Required")
            setTimeout(()=>setMessage(""),5000)
            return;
        }

        if(phone.length<10){
            setMessage("Enter a valid phone number");
            setTimeout(()=>setMessage(""),5000);
            return;
        }

         if(phoneValid.includes(phone)){
        setMessage("Enter a valid phone number");
        setTimeout(()=>setMessage(""),5000);
        return;
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
    
    
    try {
      const res =  await axios.post("https://pattari.onrender.com/user/register",
        {
            userName:userName,
            Phone:phone,
            Email:email,
            Password : password,
        })
        console.log(res);
        navigate("/home",{state:{userName : userName}})
        
    } catch (error) {
        setMessage("Email already exists..")
        setTimeout(()=>setMessage(""),5000)
        return;
    }
    
}

  return (
    <div>
       <div className="container">
            <div className="register-box">
                <h2>Register</h2>
                <div className="input-group">
                    <label htmlFor="userName">Enter Your Name</label>
                    <input type="text" name='userName' id='userName' placeholder='User Name'  onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="Phone">Enter Your Phone No</label>
                    <input type="text" name='Phone' id='Phone' placeholder='Phone No' maxLength={10} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="Email">Enter Your Email</label>
                    <input type="email" name='Email' id='Email' placeholder='Email ID' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="">Enter Your Password</label>
                    <input type="text" name='Password' id='Password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="btn-div">
                 {message && <p style={{color:"red",textAlign:"center"}}>{message}</p>}   
                    <button className='btn green' onClick={handleRegister}>Register</button>
                </div> 
                <div className='link-div'>
                    <span></span>
                    <span></span>
                 <Link to="/login"><p> LogIn</p></Link> 
                  <Link to="/reset"><p>Forgot Password</p></Link> 
                  <span></span>  
                  <span></span> 
                  </div>
            </div>
       </div>
       
    </div>
  )
}

export default Register