import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import { Avatar } from '@mantine/core';

import classes from "./UserStatus.module.css";

export function UserStatus() {

    const {user, isAuth, logout} = useAuth()
    const navigate = useNavigate()

    return (
        <div className={classes.UserStatus}>

        {isAuth 
        ? <>
        <div className={classes.UserName}>
       <Avatar variant="outline" radius="sm" color="white" src=""  />
            <p>Uživatel: {user.user_metadata.firtName} {user.user_metadata.lastName} </p> 
             </div>
         </>
        : <>
           <p>Jsi odhlášený</p>
          </>
        }

        </div>
    )
}

export default UserStatus;