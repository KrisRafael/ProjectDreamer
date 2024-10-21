import React from "react";
import { Outlet, Link } from 'react-router-dom';
// import { Button, TextInput, Title, text } from "@mantine/core";
// import { IconAlertCircle } from "@tabler/icons-react";
// import { useState } from "react";
import '../app.css'


export function MainPage() {
  
  return (
    <>
      <div>
        <h1>Main page</h1>
        <Outlet />
      </div>
    </>
  )
}

export default MainPage;