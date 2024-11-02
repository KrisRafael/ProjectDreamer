import Background from "../Background/Background";
import backgroundImage from "../../assets/BckHeroPage2.jpg";
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from 'react-router-dom'
import { Container, Title, Text, Button } from '@mantine/core';

import classes from './HeroPage.module.css'

export function HeroPage() {
  const navigate = useNavigate()
  const { user, isAuth } = useAuth();

  
  const handleRegister = (e) => {
    e.preventDefault()
    navigate("/Register")
  }

  return (
    <>
      <Background image={backgroundImage} />
       {/* {isAuth ? (
          <h2>{user.name}</h2>
        ) : (
          <h2></h2>
        )} */}

 <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Zde{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'dodgerblue', to: 'green' }}
              >
                si vytvoř
              </Text>{' '} <br />
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'dodgerblue', to: 'green' }}
              >
                 svůj 
              </Text>{' '}
               sen
            </Title>

            <Text className={classes.description} mt={30}>
              Na těchto webových stránkách si můžeš zapisovat a ukládát své sny, ktetré jsou velmi důžetité pro tvoji osobní analýzu a průběh snění. Najdeš zde také přehled svých snů podle data, pro lepší jasnost nad tvými sny.
            </Text>

            <Button onClick={handleRegister}
              variant="gradient"
              gradient={{ from: 'dodgerblue', to: 'green' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Založit účet
            </Button>
          </div>
        </div>
      </Container>
    </div>
    </>
  )
}

export default HeroPage;