import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

import { useAuth } from "../../context/AuthContext";
import { Link } from 'react-router-dom';

import Background from '../Background/Background';
import backgroundImage from "../../assets/BckRegister.jpg";

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

import classes from "./Register.module.css";

export function Register() {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [age, setAge] = useState('')

	const [message, setMessage] = useState(null)

	const { register } = useAuth()

	const handleSubmit = async (e) => {
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

				<form onSubmit={handleSubmit}>

					<Container size={500} my={30}>
						<Paper withBorder shadow="md" p={28} mt={40} radius="md">
							<Title align="center" style={{ color: '#006666' }}>
								Založte si účet
							</Title>
							<Text color="dimmed" size="sm" align="center" mt={5} style={{ color: 'black' }}>
								Potřebujete se přihlásit?{' '}
								<Link to="/Login">
									<Anchor size="sm" style={{ color: 'blue' }}>Přihlásit se.</Anchor>
								</Link>
							</Text>

							{message && <p>{message}</p>}

							<div align="left">
								<TextInput label="E-mail"
									type="email"
									value={email}
									onChange={e => setEmail(e.target.value)} placeholder="tvujemail@gmail.com" required />

								<PasswordInput label="Heslo"
									type="password"
									value={password}
									onChange={e => setPassword(e.target.value)} placeholder="Tvoje heslo" required mt="md" />

								<TextInput label="Jméno"
									type="text"
									value={firstName}
									onChange={e => setFirstName(e.target.value)} placeholder="Jméno" required />

								<TextInput label="Příjmení"
									type="text"
									value={lastName}
									onChange={e => setLastName(e.target.value)} placeholder="Příjmení" required />

								<TextInput label="Věk"
									type="text"
									value={age}
									onChange={e => setAge(e.target.value)} placeholder="Věk" required />
							</div>

							<div className={classes.text}>
								<p>Pro dokončení registrace prosím potvrďte svou e-mailovou adresu kliknutím na odkaz, který jsme vám zaslali.</p>
							</div>

							<div className={classes.ContainerButton}>
								<button className={classes.button} fullWidth mt="xl" type="submit">Registrovat se</button>
							</div>
						</Paper>
					</Container>
				</form>
			</div>
		</>
	)
}

export default Register;