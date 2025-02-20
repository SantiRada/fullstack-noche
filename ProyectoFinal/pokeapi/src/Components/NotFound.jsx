import { Link } from 'react-router-dom';

export function NotFound(){
    return(
        <div className="not-found">
            <h2>Error 404</h2>
            <img src="https://pbs.twimg.com/media/FhIaltBXwAAiNJd.png" />
            <Link className="button-center primary" to="/">Volver al Inicio</Link>
        </div>
    )
}