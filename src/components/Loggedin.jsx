import React from "react";
import { Outlet} from 'react-router-dom';
import { useNavigate} from "react-router-dom"
// import { Button, TextInput, Title, text } from "@mantine/core";
// import { IconAlertCircle } from "@tabler/icons-react";
// import { useState } from "react";
// import '../app.css'


export function Loggedin() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/MainPage")
  }
  
  return (
    <>
      <div>
      <h1>Logged in</h1>
      <button onClick={handleLogin}>Log in</button>
        <Outlet />
      </div>   
    </>
  )
}

export default Loggedin;