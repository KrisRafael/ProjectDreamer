import React from "react";
import { Outlet} from 'react-router-dom';
import { useNavigate} from "react-router-dom"
// import { Button, TextInput, Title, text } from "@mantine/core";
// import { IconAlertCircle } from "@tabler/icons-react";
// import { useState } from "react";
// import '../app.css'


export function Register() {
  const navigate = useNavigate()

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
    </>
  )
}

export default Register;