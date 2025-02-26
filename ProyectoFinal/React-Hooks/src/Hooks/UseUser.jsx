import { useContext } from "react";
import { userContext } from "../Providers/UserProvider";

export function UseUser () {
    let { user, setUser } = useContext(userContext);

    return ( {user, setUser} );
}