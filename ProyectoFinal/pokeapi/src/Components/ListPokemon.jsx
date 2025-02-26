import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function ListPokemon() {

    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=" + offset;

    let CallAPI = async () => {
        let response = await fetch(API_URL);
        let prev = await response.json();

        let newData;

        // if(Object.keys(data).length > 0) { newData = [...data, ...prev.results]; }
        // else { newData = prev.results; }

        newData = prev.results;

        setData(newData);
        setTotalPages(prev.count / 20);
    }

    useEffect(() => {
        CallAPI();
    }, [offset]);

    let LoadMore = () => {
        let newOffset = offset + 20;
        setOffset(newOffset);
    }

    let SetPage = (value) => {
        setCurrentPage(value);

        let newOffset = 20 * (value + 1);

        setOffset(newOffset);

        console.log("Offset: " + newOffset);
    }

    return(
        <>
            <section id="list">
            { Object.keys(data).length > 0 &&
                data.map(pkmon => {

                    let difID = pkmon.url.slice(-6).split('/');

                    let id = difID[1];
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
            <div className="pagination">
                <a onClick={ () => SetPage(0) }><FaChevronLeft size={24} color="#ffffff" /></a>
                { currentPage > 0 && <a onClick={ () => SetPage(currentPage - 1) }>{(currentPage)}</a> }
                <a className="current-page">{(currentPage + 1)}</a>
                { (currentPage + 1) < totalPages && <a onClick={ () => SetPage(currentPage + 1) }>{(currentPage + 2)}</a> }
                { (currentPage + 2) < totalPages && <a onClick={ () => SetPage(currentPage + 2) }>{(currentPage + 3)}</a> }
                <a onClick={ () => SetPage(currentPage + 1) }><FaChevronRight size={24} color="#ffffff" /></a>
            </div>
        </>
    )
}