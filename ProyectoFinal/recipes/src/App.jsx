import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Recommended } from './components/Recommended';
import { ListRecipes } from './components/ListRecipes';

export default function App() {

  const [search, setSearch] = useState("");

  let SendSearch = (value) => {
    setSearch(value);
  }

  return (
    <>
      <Header SendSearch={SendSearch} />
      <Recommended />
      <ListRecipes search={search} />
    </>
  )
}