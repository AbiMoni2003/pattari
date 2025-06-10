import { Link } from "react-router-dom"
function Toggle() {
  return (
    <div>
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
              <li><Link to="/location">Location</Link></li>  
              </ul>
              </div>
            </label>
    </div>
  )
}

export default Toggle