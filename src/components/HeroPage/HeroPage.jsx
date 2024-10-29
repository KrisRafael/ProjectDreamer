import Background from "../Background/Background";
import backgroundImage from "../../assets/BckHeroPage2.jpg";

import classes from './HeroPage.module.css'

export function HeroPage() {
  return (
    <>
      <Background image={backgroundImage} />

      <h1>Hero Page</h1>
    </>
  )
}

export default HeroPage;