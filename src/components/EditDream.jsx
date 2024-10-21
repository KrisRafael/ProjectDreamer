import React from "react";
import { Outlet, Link } from 'react-router-dom';
import backgroundImage from "../assets/BckEditDream.jpg";
// import { Button, TextInput, Title, text } from "@mantine/core";
// import { IconAlertCircle } from "@tabler/icons-react";
import { useState } from "react";
import '../app.css'


export function EditDream() {

  const backgroundStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  }
  
  return (
    <>
      <div>
        <h1>Edit dream</h1>
        <Outlet />
      </div>
      <div style={backgroundStyle}>
         <h1 style={{color: "white", textAlign: "center", paddingTop: "20%"}}>
        </h1>
        </div> 
    </>
  )
}

export default EditDream;