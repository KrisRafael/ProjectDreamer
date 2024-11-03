import Background from "../Background/Background";
import backgroundImage from "../../assets/BckMainPage2.jpg";
import {useNavigate} from 'react-router-dom'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

import { Accordion, } from '@mantine/core';
import { ThemeIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

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
        <Image className={classes.CardEffect}
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Sen o místě, kde se zastavil čas</Text>
        {/* <Badge color="pink">On Sale</Badge> */}
      </Group>

      <Text size="sm" c="dimmed">
        Zdál se mi nádherný sen, který mi zůstal v mysli ještě dlouho po probuzení. Cestovala jsem v cizí zemi a viděla jsem úchvátnou krajinu, kde byl vzduch tak svěží, překrásné květiny, příroda a divokost barev všude kolem. Jemný vánek lehce čechral nespoutanou divočinou, jako by sama tancovala po mě.
      </Text>

      <Button className={classes.CardEffect} onClick={handleEditdream}
              variant="gradient"
              gradient={{ from: 'dodgerblue', to: 'green' }}
              fullWidth mt="md" 
              radius="md"
            >
               Vytvoř svůj sen
            </Button>
    </Card>
   <div className={classes.CarouseContainer}>
   <Carousel 
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
      <Carousel.Slide>
        <img className={classes.hoverEffect} src="/public/ImagesCarousel/carousel1.jpg" alt="Sen1" 
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', margin: '0' }}  />
        </Carousel.Slide>
      <Carousel.Slide>
      <img className={classes.hoverEffect} src="/public/ImagesCarousel/carousel4.jpg" alt="Sen4"
      style={{ width: '100%', height: '100%', objectFit: 'cover',
      borderRadius: '8px', margin: '0' }} />
        </Carousel.Slide>
      <Carousel.Slide>
      <img className={classes.hoverEffect} src="/public/ImagesCarousel/carousel2.jpg" alt="Sen2"
      style={{ width: '100%', height: '100%', objectFit: 'cover',
      borderRadius: '8px', margin: '0' }} />
        </Carousel.Slide>
        <Carousel.Slide>
      <img className={classes.hoverEffect} src="/public/ImagesCarousel/carousel3.jpg" alt="Sen3"
      style={{ width: '100%', height: '100%', objectFit: 'cover',
      borderRadius: '8px', margin: '0' }} />
        </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>

   </div>
    
  

    <Accordion defaultValue="Apples">
      {items}
    </Accordion>
 
    </>
  )
}
export default MainPage;

