import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

import classes from "./UserStatus.module.css";

export function UserStatus() {

    const {user, isAuth, logout} = useAuth()
    const navigate = useNavigate()

    return (
        <div className={classes.UserStatus}>

        {isAuth 
        ? <>
            <p>Přihlášený uživatel: {user.user_metadata.firtName} {user.user_metadata.lastName}</p> 
         </>
        : <>
           <p>Jsi odhlášený</p>
          </>
        }

        </div>
    )
}

export default UserStatus;