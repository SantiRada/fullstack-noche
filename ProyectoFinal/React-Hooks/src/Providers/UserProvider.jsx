import React, { useState } from 'react';

export const userContext = React.createContext();
export const mailContext = React.createContext();


export function UserProvider({children}){

    const [user, setUser] = useState("Javier");
    const [mail, setMail] = useState("javier@gmail.com");

    return(
        <userContext.Provider value={{user, setUser}}>
            <mailContext.Provider value={{mail, setMail}}>
                {children}
            </mailContext.Provider>
        </userContext.Provider>
    );
}