import { useEffect } from 'react';
import { useState } from 'react';

export function CardWeather({city}){

    const [units, setUnits] = useState("metric");

    const API_KEY = "4442e65e990ce4eba658655e709a4768";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY + "&units=" + units + "&lang=es";

    // API Rest // 
    let CallAPI = async () => {
        let response = await fetch(API_URL);
        let data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        CallAPI();
    }, [city]);

    return(
        <div>Card Weather: {city}</div>
    );
}