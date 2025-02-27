import { useState, useRef } from 'react';

export function Header(){

    let timer = useRef(0);

    let [counter, setCounter] = useState(0);


    let IniciarContador = () => {
        timer.current = setInterval(() => timer.current + 1, 1000);

        if(timer.current > 10) {
            setCounter(timer.current);
        }
    }

    let Resetear = () => {
        timer.current = 0;
    }
    
    let FinalizarContador = () => {
        clearInterval();
    }
    
    return (
        <>
            <button onClick={IniciarContador}>Iniciar</button>
            <button onClick={Resetear}>Reset</button>
            <button onClick={FinalizarContador}>Finalizar</button>
            <p>{counter}</p>
        </>
    )
}