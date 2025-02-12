import './Header.css';
import { FaLinkedin, FaUserFriends, FaUniversity, FaSearch, FaHome } from "react-icons/fa";
import { FaMessage, FaBell } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import IconUser from './../Icon/Icon';

export function Header () {

    let [select, setSelect] = useState(0);

    let navigation = [
        {
            text: 'Inicio',
            icono: <FaHome size={16} />,
            url: '#',
        },
        {
            text: 'Mi Red',
            icono: <FaUserFriends size={16} />,
            url: '#',
        },
        {
            text: 'Empleos',
            icono: <FaUniversity size={16} />,
            url: '#',
        },
        {
            text: 'Mensajes',
            icono: <FaMessage size={16} />,
            url: '#',
        },
        {
            text: 'Notificaciones',
            icono: <FaBell size={16} />,
            url: '#',
        },
        {
            text: 'Yo',
            icono: <IconUser size={24} border={null} hasName={false} />,
            url: "#",
        }
    ]

    let [search, setSearch] = useState(false);
    let [searchValue, setSearchValue] = useState("");

    let resultados = [ "Ivan", "Jose", "Lautaro", "Santiago", "Aldana", "Eugenio", "Leonardo" ];

    let [recientes, setRecientes] = useState([]);

    let GetLocalStorage = () => {
        if(localStorage.getItem("recientes") != "null" || localStorage.getItem("recientes") != ""){
            setRecientes(JSON.parse(localStorage.getItem("recientes")));
        }
    }

    let SearchData = (e) => {
        e.preventDefault();

        if(searchValue != ""){
            setSearch(false);

            if(recientes) { setRecientes([...recientes, searchValue]); }
            else { setRecientes([searchValue]); }
        }
    }

    useEffect(() => {
        GetLocalStorage();
    }, []);

    useEffect(() => {
        localStorage.setItem("recientes", JSON.stringify(recientes));
    }, [recientes]);

    return(
        <header>
            { search && <div className="bg-searching"></div> }
            <div className="search-sector">
                <FaLinkedin size={36} color="#0a66c2" />
                <div className="searchbar">
                    <FaSearch color="#333" className="icon" size={12} />
                    <form onSubmit={ (e) => SearchData(e) }>
                        <input
                            onChange={ (e) => setSearchValue(e.target.value) }
                            onClick={ () => setSearch(true) }
                            onBlur={ () => setSearch(false) }
                            className={ search && "searching" }
                            type="text"
                            placeholder="Buscar"
                        />
                    </form>

                    { search &&
                    <div className="autocompleter">
                        { recientes != null && searchValue == "" &&
                            <>
                                <h3>Recientes</h3>
                                { recientes.map((item, i) => (
                                    <div key={item + "- " + i} className="item-complete">
                                        <span className="recientes">{item}</span>
                                    </div>
                                    ))
                                }
                            </>
                        }
                        { resultados.filter(item => item.toLowerCase().includes(searchValue.toLowerCase())).map((item, i) => (
                            <div key={item + ": " + i} className="item-complete">
                                <span>{item}</span>
                            </div>
                          ))
                        }
                    </div>
                    }
                </div>
            </div>
            <nav>
                { navigation.map((nav, i) => (
                    <a onClick={ () => setSelect(i) } key={nav.text + i} href={nav.url} className={ select == i && "select" }>
                        {nav.icono}
                        <span>{nav.text}</span>
                    </a>
                  ))
                }
            </nav>
        </header>
    )
}