import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { apiKey, searchURL } from '../../Variables'
import { getMovieData as getSearchedMovies } from '../../services/GetMovieData'

import MoviesCards from '../../components/movies-cards/MoviesCards'

import { CardWrapper, Cards, Title } from '../home/Style'


const Search = () => {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    useEffect(() => {

        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`

        getSearchedMovies(searchWithQueryURL, setMovies)

    }, [query])


    return (
        <CardWrapper>
            <Title>Resultados para <span>{query}</span></Title>
            <Cards>
                {movies.length === 0 && <p>carregando...</p>}
                {movies.length > 0 && movies.map(movie =>
                    <MoviesCards key={movie.id} movie={movie} />)}
            </Cards>
        </CardWrapper>
    )
}


export default Search