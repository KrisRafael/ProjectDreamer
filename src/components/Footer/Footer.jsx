import { IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";

import classes from "./Footer.module.css";

export function Footer() {
    return (
        <div className={classes.footerContainer}>
            <footer className={classes.footer}>
                <p className={classes.copyright} style={{ fontWeight: "bold", fontSize: "13px", color: "dodgerblue", marginLeft: "25px" }}>© 2024      Copyright by Kris</p>
                <div className={classes.icons}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={classes.iconLink}>
                        <IconBrandFacebook className={classes.icon} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={classes.iconLink}>
                        <IconBrandInstagram className={classes.icon} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={classes.iconLink}>
                        <IconBrandX className={classes.icon} />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;