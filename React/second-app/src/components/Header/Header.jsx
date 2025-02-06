import './Header.css';
import { FaLinkedin, FaUserFriends, FaUniversity, FaSearch, FaHome } from "react-icons/fa";
import { FaMessage, FaBell } from "react-icons/fa6";
import { useState } from 'react';

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
            icono: <img src="profe.jpg" className="image-user" />,
            url: "#",
        }
    ]

    return(
        <header>
            <div className="search-sector">
                <FaLinkedin size={36} color="#0a66c2" />
                <div className="searchbar">
                    <FaSearch color="#333" className="icon" size={12} />
                    <input type="text" placeholder="Buscar" />
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