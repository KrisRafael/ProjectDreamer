import classes from "./Header.module.css"

export function Header({buttons}) {

    return(
     <> 
     <Header /> 
        <header className={classes.header}>
           <div className={classes.circleContainer}>
            <div className={classes.circle}>
            <h1>DREAMER</h1>
            {/* <p>Create your dream</p> */}
           </div>
         </div>  
         <nav className={classes.navbar}>
             {buttons.map((button, index) => (
               <button key={index} onClick={button.onClick} 
               className={classes.navButton}>
                  {button.label}
            </button>
         ))}
         </nav>
        </header>
     </>
        
    )
}

export default Header;