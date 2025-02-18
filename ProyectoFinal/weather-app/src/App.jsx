import { useState } from 'react';
import './style.css';
import { FormWeather } from './components/FormWeather/FormWeather';
import { CardWeather } from './components/CardWeather/CardWeather';

function App() {

  const [city, setCity] = useState("");

  let sendCity = (value) => { setCity(value); }

  let voidCity = () => { setCity(""); }

  return (
    <>
      { city == "" ?
        <FormWeather sendCity={sendCity} /> :
        <CardWeather city={city} voidCity={voidCity}/>
      }
    </>
  )
}

export default App;