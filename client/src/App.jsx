import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Reset from "./pages/Reset"
import Home from "./pages/Home"
import Loaction from "./pages/Loaction"
import Toggle from "./pages/Toggle"
import Footer from "./pages/Footer"
import AdminDB from "./pages/AdminDB"
import { Navigate } from "react-router-dom"
import ProtectedRoute from "./pages/ProtectedRoute"
function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/toggle" element={<Toggle/>}/>
        <Route path="/location" element={<ProtectedRoute><Loaction/></ProtectedRoute>}/>
        <Route path="/admin" element={<ProtectedRoute><AdminDB/></ProtectedRoute>}/>
        <Route path="/*" element={<Navigate to="/Login" />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
