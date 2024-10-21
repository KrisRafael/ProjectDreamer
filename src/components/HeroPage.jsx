import React from "react";
import { Outlet, Link } from 'react-router-dom';
// import { Button, TextInput, Title, text } from "@mantine/core";
// import { IconAlertCircle } from "@tabler/icons-react";
// import { useState } from "react";
import '../app.css'


export function HeroPage() {
  
  return (
    <>
      <h1>Hero Page 1</h1>
      <div>
        <h1>Logged in</h1>
         <nav>
          <Link to="Loggedin">Přihlásit se</Link>
          <Link to="Register">Registrovat se</Link>         
         </nav>
        <Outlet />
      </div>
    </>
  )
}

export default HeroPage;