import { UseUser } from '../Hooks/UseUser';
import { UseMail } from '../Hooks/UseMail';
import { Hijo } from './Hijo';

export function Padre({children}){

    let { user, setUser } = UseUser();
    let { mail, setMail } = UseMail();

    return(
        <>
            <button onClick={() => setUser("Maria")}>{children}: {user}</button>
            <button onClick={() => setMail("maria@gmail.com")}>{children}: {mail}</button>
            <Hijo />
        </>
    );
}