import { useState } from 'react';

export function Searcher({sendSearch}) {

    const [search, setSearch] = useState("");

    let changeSearch = (e) => {
        e.preventDefault();

        sendSearch(search.toLocaleLowerCase());
    }

    return(
        <form className="form" onSubmit={ (e) => changeSearch(e) }>
            <input
                type="text"
                className="input"
                placeholder="Buscar por nombre o id"
                onChange={ (e) => setSearch(e.target.value) }
            />
        </form>
    )
}