import { useEffect, useState } from 'react';
import { FaCloudRain, FaCloudMoon, FaSun } from "react-icons/fa";
import { FaCloudBolt, FaDroplet, FaWater } from "react-icons/fa6";



export function CardWeather({city,voidCity}){

    const [units, setUnits] = useState("metric");
    const [data, setData] = useState({});

    const API_KEY = "4442e65e990ce4eba658655e709a4768";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY + "&units=" + units + "&lang=es";

    // API Rest // 
    let CallAPI = async () => {
        let response = await fetch(API_URL);
        let info = await response.json()
        setData(info);
    }

    useEffect(() => {
        CallAPI();
    }, [city, units]);

    let [icon, setIcon] = useState(<FaSun className="icon-card" />);
    let [classes, setClasses] = useState("");

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            switch(data.weather.icon){
                case "01d": setIcon(<FaCloudRain className="icon-card" />); break;
                case "02d": setIcon(<FaCloudMoon className="icon-card" />); break;
                case "03d": setIcon(<FaCloudBolt className="icon-card" />); break;
                case "04d": setIcon(<FaSun className="icon-card" />); break;
            }

            setClasses(data.weather[0].main == "Clear" ? "card clouds" : "card");
        }
    }, [data]);

    let changeUnits = (value) => {
        if (value == "c") { setUnits("metric"); }
        else { setUnits("standard"); }
    }

    return(
        <>
            { Object.keys(data).length > 0 &&
                <div className={classes}>
                    <a className="button-back" onClick={ () => voidCity() }>Volver</a>
                    <h1>{data.name}, {data.sys.country}</h1>
                    <>{icon}</>
                    <p className="temp">
                        {data.main.temp}°
                        <span className="units">
                            <a className={units == "metric" && "op-1"} onClick={ () => changeUnits("c") }>C</a>
                            /
                            <a className={units == "standard" && "op-1"} onClick={ () => changeUnits("f") }>F</a>
                        </span>
                    </p>
                    <div className="maxmin">
                        <p>Min: {data.main.temp_min}°{ units == "metric" ? "C" : "F" }</p>
                        <p>Max: {data.main.temp_max}°{ units == "metric" ? "C" : "F" }</p>
                    </div>
                    <div className="grid-2">
                        <p>{data.main.humidity} <FaDroplet /></p>
                        <p>{data.main.sea_level} <FaWater /></p>
                    </div>
                </div>
            }
        </>
    );
}