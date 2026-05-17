import {  Routes, Route,  } from "react-router-dom"
import './App.css'
import Navbar from "./Navbar";
import Home from "./Home";
import Shop from "./Shop";
import Admin from "./Admin";


 export default function App(){
return(
  <div className="App">
    <Navbar/>
    <main className="contentpage">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </main>
    
  </div>
)

}