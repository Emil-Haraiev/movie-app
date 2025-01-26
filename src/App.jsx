import React from 'react';
import {useState, useEffect} from "react";
import hero from "./assets/hero.png"
import Search from "./components/Search.jsx";

const API_BASE_URL = 'http://api.themoviedb.org/3';
const API_KEY =  import.meta.env.VITE_TMDB_API_KEY;
const App = () => {

const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {

}, [])

  return (
      <main>
          <div className="pattern">
              <div className="wrapper">
                  <header>
                      <img src={hero} alt="hero banner"/>
                      <h1>Find <span className="text-gradient">Movies</span>
                          You&#39;ll Enjoy Without the Hassle </h1>
                  </header>
                  <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
              </div>
          </div>
      </main>
  )
}

export default App
