import { useState, useEffect } from "react";

const UseFetch = (API_URL) => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const CallAPI = async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL);
            const newData = await response.json();

            setData(newData);
        } catch (error) {
            console.log("Se encontró un error: " + error);
        } finally { setLoading(false); }
    }

    useEffect(() => {
        if(API_URL) { CallAPI(); }
    }, [API_URL]);

    return( { data, loading } );
}

export { UseFetch };