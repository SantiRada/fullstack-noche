import { useState } from 'react';

export default function Icon({size, border, hasName}) {

    const [open, setOpen] = useState(false);

    switch (size) {
        case "sm": size = 24; break;
        case "md": size = 36; break;
        case "lr": size = 42; break;
        case "xlr": size = 60; break;
        default: size = 24; break;
    }

    let borderStyle = (border != null) ? (border.size + "px " + border.type + " " + border.color) : "";

    let ClicImg = () => { if(hasName) { setOpen(!open) } }

    return(
        <>
            <img src="profe.jpg" onClick={ () => { ClicImg() } } className="image-user" width={size + "px"} style={{border: borderStyle}} />
            { open && <p>Santiago Rada</p> }
        </>
    )
}