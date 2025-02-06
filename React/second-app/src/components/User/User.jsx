import './User.css';
import { useState } from 'react';

export function User({ img, name, desc, isCompany }){

    let description = "";
    let limit = isCompany ? 22 : 32;

    for(let i = 0; i < desc.length; i++){
        description += desc[i];
    }

    let [finalDesc, setFinalDesc] = useState(description.slice(0, limit) + "...");

    function showMore() {
        if(finalDesc.length > (limit + 4)){
            setFinalDesc(description.slice(0, limit) + "...");
        }else{
            setFinalDesc(description);
        }
    }

    return(
        <div className="user">
            <div className="img-user">{img}</div>
            <div className="data-user">
                <h3>{name}</h3>
                <p>
                    { isCompany &&
                    <span className="company">Empresa • </span>
                    }
                    {finalDesc}<a onClick={ () => showMore() } className="more">
                        { finalDesc.length > (limit + 4) ?
                            <span>Mostrar menos</span> :
                            <span>Mostrar más</span>
                        }
                        </a></p>
                <a className="button" href="#">+ Seguir</a>
            </div>
        </div>
    )
}