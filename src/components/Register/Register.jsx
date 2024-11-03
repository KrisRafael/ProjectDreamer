import {useNavigate} from 'react-router-dom';
import { useState } from 'react'
// import { supabase } from "../../supabase/supabase";
import {useAuth} from "../../context/AuthContext";
import {Link} from 'react-router-dom';

import Background from '../Background/Background';
import backgroundImage from "../../assets/BckRegister.jpg";

import classes from "./Register.module.css";

export function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [age, setAge] = useState('')

  const [message, setMessage] = useState(null)

  const {register} = useAuth()

  const handleSubmit = async (e) =>{
		e.preventDefault()

    setMessage(null)

		console.log('Registruji...', email, password, firstName, lastName, age)
    navigate("/MainPage")

	const { data, error } = register(email, password, firstName, lastName, age)

    if (!error && data) {
      setMessage("Registrace proběhla úspěšně. Zkontrolujte svůj e-mail a potvrďte svůj účet");
      console.log(data)
    }

    if (error) {
      console.log(error)
    }
	}

  return (
    <>
      <Background image={backgroundImage} />
      <div className={classes.container}>

      <h1>ZALOŽTE SI ÚČET</h1>
      <h2>OSOBNÍ ÚDAJE</h2>
      
      {message && <p>{message}</p>}
    
      <form onSubmit={handleSubmit}>
				<div className="form-field">
					<label>E-mail</label>
					<input
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>

				<div className="form-field">
					<label>Heslo</label>
					<input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>

				<div className="form-field">
					<label>Jméno</label>
					<input
						type="text"
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
					/>
				</div>

				<div className="form-field">
					<label>Příjmení</label>
					<input
						type="text"
						value={lastName}
						onChange={e => setLastName(e.target.value)}
					/>
				</div>

				<div className="form-field">
					<label>Věk</label>
					<input
						type="text"
						value={age}
						onChange={e => setAge(e.target.value)}
					/>
				</div><br>
        </br>
        <button className={classes.button} type="submit" >Vytvořit účet</button>
		<p>Pro dokončení registrace prosím potvrďte svou e-mailovou adresu kliknutím na odkaz, který jsme vám zaslali.</p>
		<p>Potřebuješ se přihlásit<Link to="/Login">Přihlásit se.</Link></p>
			</form>
      </div>
    </>
  )
}

export default Register;