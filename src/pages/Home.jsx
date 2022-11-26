import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const url = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
    const [bestMovies, setBestMovies] = useState([])

    const getBestMovies= async (url) => {
        const res = await fetch(url);
        const data = await res.json()

        setBestMovies(data.results)
    }

    useEffect(() =>{
        const topRatedUrl = `${url}top_rated?${apiKey}`

        getBestMovies(topRatedUrl)

    }, [])

    return (
        <div className="container">

            <h2 className="title">Melhores filmes...</h2>
            <div className="movie_container">
                {bestMovies.length === 0 && <p>Carregando...</p>}
                {bestMovies.length > 0 && bestMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
            
        </div>
    )
}

export default Home
