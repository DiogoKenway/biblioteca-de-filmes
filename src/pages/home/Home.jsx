import { useState, useEffect } from "react"
import MoviesCards from "../../components/movies-cards/MoviesCards"
import { moviesURL, apiKey } from "../../Variables"
import { getMovieData as bestRatedMovies } from '../../services/GetMovieData'

import { CardWrapper, Cards, Title  } from './Style'


const Home = () => {
    
    const [topMovies, setTopMovies] = useState([])

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

        bestRatedMovies(topRatedUrl, setTopMovies)

    }, [])

    return (
        <CardWrapper>
            <Title>Melhores Filmes Avaliados:</Title>
            <Cards>
                {topMovies.length === 0 && <p>carregando...</p>}
                {topMovies.length > 0 && topMovies.map(movie =>
                    <MoviesCards key={movie.id} movie={movie} />)}
            </Cards>
        </CardWrapper>
    )
}



export default Home