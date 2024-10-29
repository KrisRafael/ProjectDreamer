import {Link, useNavigate} from 'react-router-dom'

import classes from "./Header.module.css"

export function Header() {
  const navigate = useNavigate()

  // promenna isLoggedIn se bude cist z contextu,
  // ktery bude uchovavat informace o prohlasenem uzivateli
  const isLoggedIn = true
  // const {isLoggedIn} = useAuth()

  const handleLogout = (e) => {
    e.preventDefault()

    navigate("/")
  }

  return(
    <>
      <header className={classes.header}>
        <div className={classes.circleContainer}>
          <div className={classes.circle}>
            <h1>DREAMER</h1>
            {/* <p>Create your dream</p> */}
          </div>
        </div>
        <nav className={classes.navbar}>
          {
            isLoggedIn
            ? <>
                <Link to="/EditDream" className={classes.navButton}>VLOŽIT SEN</Link>
                <Link to="/OverviewOfDreams" className={classes.navButton}>PŘEHLED SNŮ</Link>
                <a href="#" onClick={handleLogout} className={classes.navButton}>ODHLÁSIT SE</a>
              </>
            : <>
                <Link to="/Login" className={classes.navButton}>PŘIHLÁSIT SE</Link>
                <Link to="/Register" className={classes.navButton}>REGISTROVAT SE</Link>
              </>

          }

        </nav>
      </header>
    </>

  )
}

export default Header;