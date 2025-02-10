import IconUser from './../../Icon/Icon'

export function Profile(){

    let obj = {
        size: 2,
        color: "#09f",
        type: "solid"
    };

    return(
        // <IconUser size="lr" border={ {size: 2, color: "#09f", type: "solid"} } />
        <IconUser size="lr" border={null} hasName={true} />
    )
}