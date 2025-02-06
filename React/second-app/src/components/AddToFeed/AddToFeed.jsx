import './AddToFeed.css';
import { FaInfoCircle } from "react-icons/fa";
import { User } from './../User/User';

export function AddToFeed(){

    const users = [
        {
            img: 'L',
            name: "Leonardo",
            desc: "Freelance full-stack Dev | iOS & Android Engineer | Divulgador sobre programación de Apps | Microsoft MVP, GitHub star & GDG Lead | LinkedIn Creator",
            isCompany: false
        },
        {
            img: 'I',
            name: "Ivan",
            desc: "Freelance full-stack Dev | iOS & Android Engineer | Divulgador sobre programación de Apps | Microsoft MVP, GitHub star & GDG Lead | LinkedIn Creator",
            isCompany: true
        },
        {
            img: 'L',
            name: "Lautaro",
            desc: "Freelance full-stack Dev | iOS & Android Engineer | Divulgador sobre programación de Apps | Microsoft MVP, GitHub star & GDG Lead | LinkedIn Creator",
            isCompany: true
        },
        {
            img: 'J',
            name: "Jose",
            desc: "Freelance full-stack Dev | iOS & Android Engineer | Divulgador sobre programación de Apps | Microsoft MVP, GitHub star & GDG Lead | LinkedIn Creator",
            isCompany: false
        },
    ];

    return(
        <div className="add-to-feed">
            <div className="title-sector">
                <h2>Añadir a tu Feed</h2>
                <FaInfoCircle />
            </div>
            <div className="list-users">
                { users.map((user, i) => (
                    <User key={user.name + ": " + i} img={user.img} name={user.name} desc={user.desc} isCompany={user.isCompany} />
                ))
                }
            </div>
        </div>
    )
}