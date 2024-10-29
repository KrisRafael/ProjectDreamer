import classes from "./Footer.module.css"

export function Footer() {
    return(
       <>
          <footer className={classes.footer}>
            <p style={{fontWeight: "bold", fontSize: "13px", color: "dodgerblue", marginLeft: "25px"}}>© 2024 Copyright by Kris</p>
          </footer>
       </>
    )
}

export default Footer;