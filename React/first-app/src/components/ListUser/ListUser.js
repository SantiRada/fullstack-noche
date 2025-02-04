import './ListUser.css';
import { User } from './../User/User';

export function ListUser() {

    let users = [
        {
          name: "Aldana",
          nota: 8
        },
        {
          name: "Juan",
          nota: 9
        },
        {
          name: "Luis",
          nota: 7
        },
        {
          name: "Pedro",
          nota: 6
        },
        {
            name: "Agustin",
            nota: 9
        }
    ];

    return(
        <>
            <h1>Lista de Usuarios</h1>
            <ul className="list-user">
                {
                    users.map(user => (
                        <User nombre={user.name} nota={user.nota} />
                    ))
                }
            </ul>
        </>
    );
}