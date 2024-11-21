import Background from "../Background/Background";
import backgroundImage from "../../assets/BckMainPage2.jpg";
import {useNavigate} from 'react-router-dom'
import { Accordion, Text, Card, Image, Button, Group } from '@mantine/core';

import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

import classes from "./MainPage.module.css";


export function MainPage() {
  const navigate = useNavigate()

  const handleEditdream = (e) => {
    e.preventDefault()
    navigate("/EditDream")
  }
  const handleButton = (e) => {
    e.preventDefault()
    navigate("/OverviewOfDreams")
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
    
    <div>
    <Text className={classes.gradientText}
    >
      <h1 className={classes.spaceMonoBold}>
        ZDE ZAČÍNÁ TVŮJ SNOVÝ ZÁŽITEK</h1>
    </Text>
    </div>
    
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
        <Text fw={500} align="left">Sen o místě, kde se zastavil čas</Text>
        {/* <Badge color="pink">On Sale</Badge> */}
      </Group>

      <Text size="sm" c="dimmed" align="left">
        Zdál se mi nádherný sen, který mi zůstal v mysli ještě dlouho po probuzení. Cestovala jsem v cizí zemi a viděla jsem úchvátnou krajinu, kde byl vzduch tak svěží, překrásné květiny, příroda a divokost barev všude kolem. Jemný vánek lehce čechral nespoutanou divočinou, jako by sama tancovala po mě.
      </Text>

      <Button
  onClick={handleEditdream}
  variant="gradient"
  fullWidth
  mt="md"
  radius="md"
  style={{
    boxShadow: '0 0 9px rgba(255, 255, 255, 0.5)',
    background: 'linear-gradient(to left, rgba(38, 120, 113, 0.4), rgba(19, 106, 138, 0.8))',
    borderRadius: '5px',
    color: 'white',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundImage = 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)';
    e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundImage = '';
    e.currentTarget.style.boxShadow = '0 0 9px rgba(255, 255, 255, 0.5)';
  }}
>
  VYTVOŘ SEN
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
    <div style={{ position: 'relative', height: 200 }}>
        <img 
            className={classes.hoverEffect} 
            src="/ImagesCarousel/carousel1.jpg" 
            alt="Sen1" 
            style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '8px', 
                margin: '0' 
            }} 
        /> 
        <div className={classes.title}>
            Název snu
        </div>
        <Button 
            className={classes.button}
            style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)' }} 
            onClick={handleButton}
        >
            Otevřít sen
        </Button>
    </div>
  </Carousel.Slide>

  <Carousel.Slide>
    <div style={{ position: 'relative', height: 200 }}>
        <img 
            className={classes.hoverEffect} 
            src="/ImagesCarousel/carousel4.jpg" 
            alt="Sen1" 
            style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '8px', 
                margin: '0' 
            }} 
        /> 
        <div className={classes.title}>
            Název snu
        </div>
        <Button 
            className={classes.button}
            style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)' }} 
            onClick={handleButton}
        >
            Otevřít sen
        </Button>
    </div>
  </Carousel.Slide>

  <Carousel.Slide>
    <div style={{ position: 'relative', height: 200 }}>
        <img 
            className={classes.hoverEffect} 
            src="/ImagesCarousel/carousel2.jpg" 
            alt="Sen1" 
            style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '8px', 
                margin: '0' 
            }} 
        /> 
        <div className={classes.title}>
            Název snu
        </div>
        <Button 
            className={classes.button}
            style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)' }} 
            onClick={handleButton}
        >
            Otevřít sen
        </Button>
    </div>
  </Carousel.Slide>

  <Carousel.Slide>
    <div style={{ position: 'relative', height: 200 }}>
        <img 
            className={classes.hoverEffect} 
            src="/ImagesCarousel/carousel3.jpg" 
            alt="Sen1" 
            style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '8px', 
                margin: '0' 
            }} 
        /> 
        <div className={classes.title}>
            Název snu
        </div>
        <Button 
            className={classes.button}
            style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)' }} 
            onClick={handleButton}
        >
            Otevřít sen
        </Button>
    </div>
  </Carousel.Slide>
 </Carousel>  

   </div>
   </div>
    </>
  )
}
export default MainPage;

