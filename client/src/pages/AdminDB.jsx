import { useState } from 'react';
import axios from 'axios';

function AdminDB() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const [userList, setUserList] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

     const handleAdminLogin = async()=>{
        if(!email || !password){
            setMessage("All Fields are Required")
            setTimeout(()=>setMessage(""),5000)
            return
        }
    
        
        try {
          const res =  await axios.post("https://pattari.onrender.com/admin/login",
                {
                    Email : email,
                    Password : password,
                }
            )
           if(res.data.message === "Login Successfull"){
            console.log("login successful");
            isLoggedIn(true)
            const userRes = await axios.get("https://pattari.onrender.com/user/listall");
            setUserList(userRes.data);
           }
        } catch (error) {
            setMessage("Invalid Email and Password..")
            setTimeout(() => setMessage(""), 5000);
        }
    }



  return (
    <div>
        <h1 style={{textAlign:"center",fontWeight:800}}>Only For Admin Use</h1>

          { !isLoggedIn && (<div className="admin-container">
            <div className="login-div">
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="Email">Enter Your Email</label>
                    <input type="email" name='Email' id='Email' placeholder='Mail Id'onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="Password">Enter Your Password</label>
                    <input type="text" name='Password' id='Password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className='btn-div'>
                {message && <p style={{color:"red",textAlign:"center"}}>{message}</p>}
                <button className='btn green' onClick={handleAdminLogin}>Login</button>
                </div>               
            </div>
        </div>)}
       {isLoggedIn && (
        <div className="list-all-users">
            <h2 style={{ textAlign: "center" }}>All Registered Users</h2>

            <table className="table">
            <thead>
                <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {userList.map((user, index) => (
                <tr key={user._id || index}>
                    <td>{index + 1}</td>
                    <td>{user.userName }</td>
                    <td>{user.Email}</td>
                    <td>{user.Password}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        )}
    </div>
  )
}

export default AdminDB