import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NotFound } from './Components/NotFound';
import { Searcher } from './Components/Searcher';
import { ListPokemon } from './Components/ListPokemon';
import { Pokemon } from './Components/Pokemon';
import './style.css';

function App() {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  let sendSearch = (value) => { setSearch(value); }

  useEffect(() => {
    if(search != "") { navigate("/pokemon/" + search); }
  }, [search]);

  return(
    <>
      <Searcher sendSearch={sendSearch} />

      <Routes>
        <Route path="*" element={ <NotFound /> } />
        <Route path="/" element={ <ListPokemon /> } />
        <Route path="/pokemon/:id" element={ <Pokemon /> } />
      </Routes>
    </>
  )
}

export default App;

// npm install react-router-dom