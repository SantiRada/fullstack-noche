import { useContext } from "react";
import { mailContext } from "../Providers/UserProvider";

export function UseMail () {
    let { mail, setMail } = useContext(mailContext);

    return ( {mail, setMail} );
}