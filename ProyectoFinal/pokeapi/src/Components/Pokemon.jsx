import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export function Pokemon() {

    let { id } = useParams();


    const [data, setData] = useState({});
    const API_URL = "https://pokeapi.co/api/v2/pokemon/" + id;

    let CallAPI = async () => {
        let response = await fetch(API_URL);
        let previousData = await response.json();

        setData(previousData);

        console.log(previousData);
    }

    useEffect(() => {
        CallAPI();
    }, []);

    let TranslateType = (value) =>{
        let specificType;

        switch(value) {
            case "grass": specificType = "Planta"; break;
            case "poison": specificType = "Veneno"; break;
        }

        return specificType;
    }

    let [idString, setIdString] = useState("");

    useEffect(() => {
        if(Object.keys(data).length > 0){
            setIdString(data.id.toString().padStart(3, '0'));
        }
    }, [data]);

    let img = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/" + idString + ".png";
    
    return(
        <>
        { Object.keys(data).length > 0 &&
            <>
                <Link to="/">Volver</Link>
                <div className="item">
                    <h2>{data.name} <span>N.° {data.id.toString().padStart(4, '0')}</span></h2>
                    <div className="grid-2-complete">
                        <img src={img} />
                        <div className="right-content">
                            <h3>Habilidades</h3>
                            <div className="grid-2">
                                { data.abilities.map(ability => ( 
                                    <p>{ability.ability.name}</p>
                                ))}
                            </div>

                            <h3>Tipos</h3>
                            <div className="grid-2">
                                { data.types.map(type => {

                                    let specificType = TranslateType(type.type.name);

                                    return( <p>{specificType}</p> )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
        </>
    )
}