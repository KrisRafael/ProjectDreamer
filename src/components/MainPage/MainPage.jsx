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
    { value: 'Sen o cestě na měsíci', emoji: '🌙', description: 'Snila jsem o cestě na měsíc. Tento sen mě odnesl tak daleko do neznámých a neppoznaných míst, že jsem sotva popadala dech.' },
    { value: 'Sen o cestování', emoji: '💭', description: 'Cestovala jsem do Indonésie k poznání místní kultury.' },
    { value: 'Sen o malování', emoji: '🌔', description: 'Malovala jsem na plátno abstraktní mistrovské dílo, které se stalo oslavou barev a tvarů.Každý tah štětce byl pro mě radostí, jako bych vdechovala život do prázdného prostoru.' },
    { value: 'Sen o horách', emoji: '🌙', description: 'Přijela jsem do nového neznámého města, kolem kterého se rozprostíraly velkolepé hory a společně s přáteli jsme se vydali vstříc jejich strmým stezkám.' },
    { value: 'Sen o rodině', emoji: '💭', description: 'Přijela kě mě po dlouhé době na návštěvu vzdálená rodina.' },
    { value: 'Sen o zvířatech', emoji: '🌔', description: 'Snila jsem o farmě, žila jsem tam se spousty zvířaty.' },
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
      <div className={classes.BodyContainer}>
    <h1>Zde začíná tvůj snový zážitek </h1>

  <div className={classes.MainContainer} >
    <div className={classes.CardContainer} >
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
    </div>
   <div className={classes.ContainerLabel}>
    <Accordion 
       defaultValue="Apples">
        {items}
      </Accordion>
      </div>
    </div>

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
        <img className={classes.hoverEffect} src="/ImagesCarousel/carousel1.jpg" loading="lazy" alt="Sen1" 
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', margin: '0' }}  />
        </Carousel.Slide>
      <Carousel.Slide>
      <img className={classes.hoverEffect} src="/ImagesCarousel/carousel4.jpg" loading="lazy" alt="Sen4"
      style={{ width: '100%', height: '100%', objectFit: 'cover',
      borderRadius: '8px', margin: '0' }} />
        </Carousel.Slide>
      <Carousel.Slide>
      <img className={classes.hoverEffect} src="/ImagesCarousel/carousel2.jpg" loading="lazy" alt="Sen2"
      style={{ width: '100%', height: '100%', objectFit: 'cover',
      borderRadius: '8px', margin: '0' }} />
        </Carousel.Slide>
        <Carousel.Slide>
      <img className={classes.hoverEffect} src="/ImagesCarousel/carousel3.jpg" loading="lazy" alt="Sen3"
      style={{ width: '100%', height: '100%', objectFit: 'cover',
      borderRadius: '8px', margin: '0' }} />
        </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>

   </div>
   </div>
    </>
  )
}
export default MainPage;

