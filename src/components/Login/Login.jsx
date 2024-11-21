import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {Link} from 'react-router-dom';

import {useAuth} from "../../context/AuthContext";

import Background from '../Background/Background';
import backgroundImage from "../../assets/BckLogin.jpg";

import {
	TextInput,
	PasswordInput,
	Anchor,
	Paper,
	Title,
	Text,
	Container,
	Group,
	Button,
} from '@mantine/core';

import classes from "./Login.module.css";

export function Loggedin() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {login} = useAuth()

	const handleSubmit = async (e) =>{
		e.preventDefault()
		console.log('Prihlasuji...', email, password)
		const {error} = login(email, password)
	
		if (error) {
			console.log(error)
			return 
		}
        navigate("/MainPage")
	}

  return (
    <>
      <Background image={backgroundImage} />
      <div className={classes.container}>

      <form onSubmit={handleSubmit}>

	  <Container size={420} my={40}>
	  <Paper withBorder shadow="md" p={30} mt={30} radius="md">
       <Title align="center" style={{ color: '#006666' }}>
        Vítejte zpět!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5} style={{ color: 'black' }}>
        Ještě nemáte účet?{' '}
        <Link to="/Register">
          <Anchor size="sm" style={{ color: 'blue' }}>Registrovat se.</Anchor>
        </Link>
      </Text>

	  <div align="left">
        <TextInput label="E-mail" 
		                type="email"
						value={email}
						onChange={e => setEmail(e.target.value)} placeholder="tvujemail@gmail.com" required />

        <PasswordInput label="Heslo" 
		                type="password"
						value={password}
						onChange={e => setPassword(e.target.value)} placeholder="Tvoje heslo" required mt="md" />
		</div>

		<div className={classes.ContainerButton}>
        <button className={classes.button} fullWidth mt="xl" type="submit">Přihlásit se</button>
		</div>   
      </Paper>
    </Container>
			</form>
      </div>
    </>
  )
}

export default Loggedin;