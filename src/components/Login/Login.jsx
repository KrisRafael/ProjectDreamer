import {useNavigate} from 'react-router-dom'

import Background from '../Background/Background';
import backgroundImage from "../../assets/BckLogin.jpg";

import classes from "./Login.module.css";

export function Loggedin() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/MainPage")
  }

  return (
    <>
      <Background image={backgroundImage} />

      <h1>PŘIHLÁSIT SE KE SVÉMU ÚČTU</h1>
      <button onClick={handleLogin}>Přihlásit se</button>
      <p>Zapomněli jste heslo?</p>
      <p>Zapamatovat si mě</p>

    </>
  )
}

export default Loggedin;