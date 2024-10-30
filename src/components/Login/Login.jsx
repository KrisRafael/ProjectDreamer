import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {Link} from 'react-router-dom';

import Background from '../Background/Background';
import backgroundImage from "../../assets/BckLogin.jpg";

import classes from "./Login.module.css";

export function Loggedin() {
  const navigate = useNavigate()

  // const handleLogin = () => {
  //   navigate("/MainPage")
  // }

  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e) =>{
		e.preventDefault()
		console.log('Prihlasuji...', email, password)
    navigate("/MainPage")
	}

  return (
    <>
      <Background image={backgroundImage} />
      <div className={classes.container}>

      <h1>PŘIHLÁSIT SE KE SVÉMU ÚČTU</h1>
      {/* <button onClick={handleLogin}>Přihlásit se</button> */}
      
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
				</div><br></br>

				<button className={classes.button} type="submit">Přihlásit se</button>

				<p>Ještě nemáš účet? <Link to="/Register">Zaregistruj se.</Link></p>
			</form>
      </div>
      <p>Zapomněli jste heslo?</p>
      <p>Zapamatovat si mě</p>
    </>
  )
}

export default Loggedin;