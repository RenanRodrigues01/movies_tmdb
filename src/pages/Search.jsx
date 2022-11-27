import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import MovieCard from "../components/MovieCard/MovieCard";
import "./Movie/Movie.css";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
    const [searchparams] = useSearchParams();

    const [movies, setMovies] = useState([])
    const query = searchparams.get("q")

    const getSearchedMovies= async (url) => {
        const res = await fetch(url);
        const data = await res.json()

        setMovies(data.results)
    }

    useEffect(() =>{
        const searchWthiQuryURL = `${searchURL}?${apiKey}&query=${query}`

        getSearchedMovies(searchWthiQuryURL)

    }, [movies])

    return (
        <div className="container">

            <h2 className="title">
                Resultados para <span className="query-text">{query}</span>
            </h2>
            <div className="movie_container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
            
        </div>
    )
}

export default Search