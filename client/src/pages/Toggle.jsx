import { Link,useNavigate } from "react-router-dom"
function Toggle() {

  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.clear();
  sessionStorage.clear();

  navigate("/", { replace: true });

   setTimeout(() => {
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, "", window.location.href);
      };
    }, 100);
};
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
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/mass">Mass</Link></li>
              <li><Link to="/location">Location</Link></li>  
              <li onClick={handleLogout} style={{cursor:"pointer"}}>LogOut</li>
              </ul>
             <button className="admin-db-btn btn"><Link to="/admin">Admin DB</Link> </button>
              </div>
            </label>
    </div>
  )
}

export default Toggle