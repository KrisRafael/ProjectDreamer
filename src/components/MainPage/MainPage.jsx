import Background from "../Background/Background";
import backgroundImage from "../../assets/BckMainPage2.jpg";
import {useNavigate} from 'react-router-dom'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

import { Accordion, } from '@mantine/core';
import { ThemeIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

import { Carousel } from '@mantine/carousel';
// import {useAuth} from "../../context/AuthContext";

import classes from "./MainPage.module.css";


export function MainPage() {
  const navigate = useNavigate()

  const handleEditdream = (e) => {
    e.preventDefault()
    navigate("/EditDream")
  }

  //Custom control label
  const groceries = [
    { value: 'Jablka', emoji: '🍏', description: 'Čerstvá jablka, skvělá na svačinu.' },
    { value: 'Hrozny', emoji: '🍇', description: 'Sladké hrozny plné vitamínů.' },
    { value: 'Banány', emoji: '🍌', description: 'Banány jsou bohaté na draslík.' },
  ];
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));
 
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

    <Accordion defaultValue="Apples">
      {items}
    </Accordion>
 
    </>
  )
}

//Carousel
export function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop
      align="start"
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}

export default MainPage;
