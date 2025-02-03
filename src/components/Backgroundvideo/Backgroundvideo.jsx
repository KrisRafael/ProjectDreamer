import React from "react";
import classes from './Backgroundvideo.module.css'

const BackgroundVideo = ({ video, image }) => {
  return (
    <div className={classes.videoContainer}>
      <video autoPlay loop muted className={classes.backgroundVideo}>
        <source src={video} type="video/mp4" />
        Váš prohlížeč nepodporuje video tag.
      </video>
      {/* <img src={image}>
        className={classes.background}
        style={{backgroundImage: `url(${image})`}}
        </img> */}
      <div className={classes.content}>
        {/* <h1>Hlavní Nadpis</h1>
          <p>Text nad videem</p> */}
      </div>
    </div>
  )
}

export default BackgroundVideo;