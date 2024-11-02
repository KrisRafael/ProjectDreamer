import {Outlet} from 'react-router-dom'

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import classes from "./App_temp.module.css";

export function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;