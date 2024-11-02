import {Link, useNavigate, useLocation} from 'react-router-dom'
import {useAuth} from "../../context/AuthContext";

import UserStatus from '../UserStatus/UserStatus'

import classes from "./Header.module.css"

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location)

  // promenna isLoggedIn se bude cist z contextu,
  // ktery bude uchovavat informace o prohlasenem uzivateli
  const {isAuth, logout} = useAuth()


  const handleLogout = (e) => {
    e.preventDefault()
    logout()
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
          {isAuth &&
            <>
              <Link to="/EditDream" className={classes.navButton}>VLOŽIT SEN</Link>
              <Link to="/OverviewOfDreams" className={classes.navButton}>PŘEHLED SNŮ</Link>
              <a href="#" onClick={handleLogout} className={classes.navButton}>ODHLÁSIT SE</a>

              <UserStatus />
            </>
          }

          { (!isAuth && location.pathname === '/') &&
            <>
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