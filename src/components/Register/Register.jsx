import {useNavigate} from 'react-router-dom';

import Background from '../Background/Background';
import backgroundImage from "../../assets/BckRegister.jpg";

import classes from "./Register.module.css";

export function Register() {
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate("/MainPage")
  }

  return (
    <>
      <Background image={backgroundImage} />
      <h1>ZALOŽTE SI ÚČET</h1>
      <h2>OSOBNÍ ÚDAJE</h2>
      <button onClick={handleRegister}>Vytvořit účet</button>
    </>
  )
}

export default Register;