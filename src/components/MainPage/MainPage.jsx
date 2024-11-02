import Background from "../Background/Background";
import backgroundImage from "../../assets/BckMainPage2.jpg";
import {useNavigate} from 'react-router-dom'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
// import {useAuth} from "../../context/AuthContext";

import classes from "./MainPage.module.css";

export function MainPage() {
  const navigate = useNavigate()

  const handleEditdream = (e) => {
    e.preventDefault()
    navigate("/EditDream")
  }
  
  return (
    <>
      <Background image={backgroundImage} />
      <h1>Zde začíná tvůj snový zážitek </h1>

      <Card className={classes.Card} shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        {/* <Badge color="pink">On Sale</Badge> */}
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button onClick={handleEditdream}
              variant="gradient"
              gradient={{ from: 'dodgerblue', to: 'green' }}
              fullWidth mt="md" 
              radius="md"
            >
               Vytvoř svůj sen
            </Button>
    </Card>
  );
    </>
  )
}

export default MainPage;