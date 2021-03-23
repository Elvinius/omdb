import React from 'react'
import MovieItem from './MovieItem'
import Spinner from '../ui/Spinner'

const MovieGrid = ({ movies, isLoading }) => {
    return isLoading ? (<Spinner />)
        : (<section className="cards">
            {movies && movies.filter(m => m.Type === "movie").map(movie => (
                <MovieItem key={movie.imdbID} movie={movie} />
            ))}
        </section>)
}

export default MovieGrid;