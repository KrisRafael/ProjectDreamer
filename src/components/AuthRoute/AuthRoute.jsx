import {useAuth} from "../../context/AuthContext";
import {Outlet} from "react-router-dom";

export function AuthRoute() {
    const {isAuth} = useAuth()

    if (isAuth) {
        return <Outlet />
    }

    return(
        <p>Pouze pro přihlášené uživatele</p>
    )
}

export default AuthRoute;