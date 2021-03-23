import React from 'react'

const MovieItem = ({ movie }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className='card-back'>
                    <h1>{movie.Title}</h1>
                    <ul>
                        <li>
                            <strong>Movie Year:</strong> {movie.Year}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieItem
