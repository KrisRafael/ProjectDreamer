// import Background from "../Background/Background";
// import backgroundImage from "../../assets/BckHeroPage2.jpg";
import BackgroundVideo from "../Backgroundvideo/backgroundvideo";
import BackgroundVideoFile from "../../assets/ArrowBackground.mp4";
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from 'react-router-dom'
import { Container, Title, Text, Button } from '@mantine/core';

import classes from './HeroPage.module.css'

export function HeroPage() {
  const navigate = useNavigate()
 
  const handleRegister = (e) => {
    e.preventDefault()
    navigate("/Register")
  }

  return (
    <>
      <BackgroundVideo video={BackgroundVideoFile} /> 
      {/* <Background image={backgroundImage} style={{ opacity: 0.5 }} /> */}
     
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
              Na těchto webových stránkách si můžete zapisovat a ukládát své sny, ktetré jsou velmi důžetité pro vaši osobní analýzu a průběh snění. Najdete zde také přehled vašich snů seřazené podle data, pro jasný přehled nad vašimi sny.
            </Text>

            <Button onClick={handleRegister}
              variant="gradient"
              gradient={{ from: 'dodgerblue', to: 'green' }}
              size="xl"
              className={classes.control}
              mt={50}
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