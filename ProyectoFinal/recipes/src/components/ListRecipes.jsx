import { useState, useEffect } from 'react';
export function ListRecipes ({search}) {

    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + search;

    // LLAMADO INICIAL PARA EL LISTADO SIN BUSQUEDA
    // LLAMAR MÁS ELEMENTOS EN BASE AL SCROLL
    // TRABAJAR CON PLACEHOLDERS
    // SUMAR LA SECCIÓN DE RECOMENDADOS

    const [data, setData] = useState({});

    let CallAPI = async () => {
        let response = await fetch(API_URL);
        let newData = await response.json();

        setData(newData);
    }

    useEffect(() => {
        if(search != "") { CallAPI(); }
    }, [search]);

    return(
        <>
            { Object.keys(data).length > 0 && 
            <div className="card">
                <h3>{data.meals[0].strMeal}</h3>
                <small>{data.meals[0].strArea}</small>
                <p>{data.meals[0].strCategory}</p>
                <img src={data.meals[0].strMealThumb} />
            </div>
            }
        </>
    );
}