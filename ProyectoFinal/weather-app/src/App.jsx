import { useState } from 'react';
import './style.css';
import { FormWeather } from './components/FormWeather/FormWeather';
import { CardWeather } from './components/CardWeather/CardWeather';

function App() {

  const [city, setCity] = useState("");

  let sendCity = (value) => { setCity(value); }

  return (
    <>
      { city == "" ?
        <FormWeather sendCity={sendCity} /> :
        <CardWeather city={city} />
      }
    </>
  )
}

export default App;