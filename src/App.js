import { useState, useEffect } from 'react';
import Search from './components/ui/Search';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MovieGrid from './components/movies/MovieGrid';
import Header from './components/ui/Header';
import amadeus from './img/amadeus.jpg';
import silence from './img/silence.jpg';
import darkknight from './img/thedarkknightrises.jpg';
import irishman from './img/irishman.jpg';
import lui from './img/lui.jpg';
import malena from './img/malena.jpg';
import skini from './img/skini.jpg';
import mrnobody from './img/mrnobody.jpg';
import env from "react-dotenv";
const OMDB_API_KEY = env.REACT_APP_OMDB_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`);
      setMovies(result.data["Search"]);
      setIsLoading(false);
    }
    fetchMovies();
  }, [query]);
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <MovieGrid isLoading={isLoading} movies={movies} />
            {!movies && (<div className="cards">
              <div className="card">
                <div className='card-front'>
                  <img src={amadeus} alt="Amadeus" />
                </div>
              </div>
              <div className="card">
                <div className='card-front'>
                  <img src={silence} alt="Silence" />
                </div>
              </div>
              <div className="card">
                <div className='card-front'>
                  <img src={darkknight} alt="Dark Knight Rises" />
                </div>
              </div>
              <div className="card">
                <div className='card-front'>
                  <img src={irishman} alt="irishman" />
                </div>
              </div>
              <div className="card">
                <div className='card-front'>
                  <img src={lui} alt="Louis De Funes" />
                </div>
              </div>
              <div className="card">
                <div className='card-front'>
                  <img src={malena} alt="Malena" />
                </div>
              </div>
              <div className="card">
                <div className='card-front'>
                  <img src={skini} alt="Skin" />
                </div>
              </div>
              <div className="card">
                <div className='card-front'>
                  <img src={mrnobody} alt="Mr. Nobody" />
                </div>
              </div>
            </div>)}
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;