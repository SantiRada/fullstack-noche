import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function ListPokemon() {

    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0); 
    const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=" + offset;

    let CallAPI = async () => {
        let response = await fetch(API_URL);
        let prev = await response.json();

        let newData;

        if(Object.keys(data).length > 0) { newData = [...data, ...prev.results]; }
        else { newData = prev.results; }

        setData(newData);
    }

    useEffect(() => {
        CallAPI();
    }, [offset]);

    let LoadMore = () => {
        let newOffset = offset + 20;
        setOffset(newOffset);
    }

    let LoadLess = () => { setData(data.slice(0, 20)); }

    return(
        <>
            <section id="list">
            { Object.keys(data).length > 0 &&
                data.map((pkmon, i) => {

                    let id = i + 1;
                    let idStr = id.toString().padStart(3, '0');

                    let img = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/" + idStr + ".png";

                    return(
                        <div key={pkmon.name}>
                            <img src={img} />
                            <p>{idStr}</p>
                            <h2>{pkmon.name}</h2>
                            <Link className="button" to={"/pokemon/" + id}>Ver más</Link>
                        </div>
                    )
                })
            }
            </section>
            <div className="center-obj">
                <a onClick={ () => LoadLess() } className="button-center secondary">Cargar menos</a>
                <a onClick={ () => LoadMore() } className="button-center primary">Cargar más</a>
            </div>
        </>
    )
}