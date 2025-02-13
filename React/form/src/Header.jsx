import { useState } from 'react';

export function Header (){

    let navigation = [
        {
            item: "Conductores",
            categories: [
                {
                    title: "Conducir",
                    items: [ "item-1", "item-2", "item-3" ]
                },
                {
                    title: "Cabify para Flotas",
                    items: [ "item-1", "item-2", "item-3" ]
                },
                {
                    title: "Ayuda",
                    items: [ "item-1", "item-2", "item-3" ]
                }
            ]
        },
        {
            item: "Empresas",
            categories: [
                {
                    title: "Empresa",
                    items: [ "item-1", "item-2", "item-3", "item-4" ]
                },
                {
                    title: "Cabify para Flotas",
                    items: [ "item-1", "item-2" ]
                }
            ]
        }
    ];

    let [select, setSelect] = useState("");

    return(
        <header className="header">
            <h2>Cabify</h2>
            <nav>
                { navigation.map(item => (
                    <a key={item.item} onMouseEnter={ () => setSelect(item.item) }>{item.item}</a>
                ))
                }

                { select != "" &&
                    <div onMouseLeave={ () => setSelect("") } className="modal">
                        { navigation.filter(itemPrev => itemPrev.item == select).map(item => {
                            return(
                            <ul>
                            {item.categories.map(cat => {
                                return(
                                    <>
                                        <li>{cat.title}</li>
                                        {cat.items.map(listItem => {
                                            return(
                                                <>
                                                    <li className="item">{listItem}</li>
                                                </>
                                            )
                                        })}
                                    </>
                                )
                                
                            })}
                            </ul>)
                          })
                        }
                    </div>
                }
            </nav>
        </header>
    )
}