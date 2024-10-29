import Background from '../Background/Background';
import backgroundImage from "../../assets/BckEditDream.jpg";

import classes from "./EditDream.module.css";


export function EditDream() {
  return (
    <>
      <Background image={backgroundImage} />

      <h1>VLOŽIT SEN</h1>
    </>
  )
}

export default EditDream;
