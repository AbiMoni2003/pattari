import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Reset from "./pages/Reset"
import Home from "./pages/Home"
import Loaction from "./pages/Loaction"
import Toggle from "./pages/Toggle"
function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/*" element={<Login/>}/>
        <Route path="/toggle" element={<Toggle/>}/>
        <Route path="/location" element={<Loaction/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
