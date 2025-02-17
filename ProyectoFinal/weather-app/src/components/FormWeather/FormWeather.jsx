import { useState } from 'react';

export function FormWeather({sendCity}){

    const [city, setCity] = useState("");

    let checkCity = () => {
        console.log("Check!");
        if(city != "") { sendCity(city); }
    }

    return(
        <div className="form">
            <input
                type="text"
                className="input"
                placeholder="Ciudad"
                onChange={ (e) => setCity(e.target.value) }
            />
            <a onClick={ () => checkCity() } className="button">Buscar</a>
        </div>
    );
}