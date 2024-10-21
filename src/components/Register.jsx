import React from "react";
import { Outlet} from 'react-router-dom';
import { useNavigate} from "react-router-dom"
import backgroundImage from "../assets/BckRegister.jpg";
// import { Button, TextInput, Title, text } from "@mantine/core";
// import { IconAlertCircle } from "@tabler/icons-react";
// import { useState } from "react";
// import '../app.css'


export function Register() {
  const navigate = useNavigate()

  const backgroundStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  }

  const handleRegister = () => {
    navigate("/MainPage")
  }
  
  return (
    <>
      <div>
      <h1>Register</h1>
      <button onClick={handleRegister}>Register</button>
        <Outlet />
      </div>   
       <div style={backgroundStyle}>
         <h1 style={{color: "white", textAlign: "center", paddingTop: "20%"}}>
        </h1>
        </div> 
    </>
  )
}

export default Register;