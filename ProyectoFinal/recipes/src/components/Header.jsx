import { useState } from 'react';

export function Header({SendSearch}) {

    const [search, setSearch] = useState("");

    let Change = (e) => {
        e.preventDefault();
        SendSearch(search);
    }

    let ChangeValue = (value) => setSearch(value);

    return (
        <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
            <form onSubmit={(e) => Change(e)}>
                <input
                    type="text"
                    placeholder="Buscar receta"
                    onChange={(e) => ChangeValue(e.target.value) }
                />
            </form>
        </header>
    );
}