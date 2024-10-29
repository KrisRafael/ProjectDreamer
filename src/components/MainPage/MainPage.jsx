import Background from "../Background/Background";
import backgroundImage from "../../assets/BckMainPage2.jpg";

import classes from "./MainPage.module.css";

export function MainPage() {
  return (
    <>
      <Background image={backgroundImage} />

      <h1>HLAVNÍ STRÁNKA</h1>
    </>
  )
}

export default MainPage;