import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"

import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';



  
const About = () => {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  
  return (
  <div>
     <h1 style={{color:"green"}}>A Computer Science portal for geeks.</h1>
     <button onClick={()=>navigate(-1)}> Go Back Home </button>

     <div>
      <input type={passwordVisible ? 'text' : 'password'} />
      <span onClick={togglePasswordVisibility}>
        {passwordVisible ? <RiEyeOffLine /> : <RiEyeLine />}
      </span>
    </div>

    </div>
  )
};
  
export default About;