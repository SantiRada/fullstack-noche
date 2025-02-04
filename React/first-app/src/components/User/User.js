import './User.css';

export function User ({nombre, nota}) {
    return(
        <div className="user">
            <h2>{nombre}</h2>
            <p>{nota}</p>
        </div>
    );
}