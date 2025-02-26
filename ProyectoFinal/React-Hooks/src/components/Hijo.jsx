import { UseMail } from '../Hooks/UseMail';

export function Hijo(){

    let { mail } = UseMail();

    return(
        <h3>{mail}</h3>
    );
}