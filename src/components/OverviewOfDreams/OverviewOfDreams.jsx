import Background from '../Background/Background';
import backgroundImage from "../../assets/BckOverview.jpg";

import classes from "./OverviewOfDreams.module.css";

export function OverviewOfDreams() {
  return (
    <>
      <Background image={backgroundImage} />

      <h1>PŘEHLED SNŮ</h1>
    </>
  )
}

export default OverviewOfDreams;