import classes from './Background.module.css'

export function Background({image}) {
  return (
    <div
      className={classes.background}
      style={{backgroundImage: `url(${image})`}}
    ></div>
  );
}

export default Background;