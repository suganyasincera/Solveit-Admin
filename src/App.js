import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Screens/Login';
import About from './Components/Screens/About';
import "./App.css";

export default function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route exact path='/' element={<Login/>} />
  {/* <Home  /> */}
  <Route exact path='About' element={<About/>} />
</Routes>
</BrowserRouter>
</>
    
  )
}