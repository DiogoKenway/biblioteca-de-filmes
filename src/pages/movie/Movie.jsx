import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getMovie from '../../services/Movie'
import Card from '../../components/card/Card'
import { moviesURL, apiKey } from '../../Variables'
import { formatCurrency } from '../../assets/Functions'

import { MoviePage, Info, Subtitle  } from './style'

import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'


const Movie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const resultMovieURL = `${moviesURL}${id}?${apiKey}`

        getMovie(resultMovieURL, setMovie)
    }, [])


    return (
        <MoviePage>{movie &&
            <>
                <Card movie={movie} showLink={false} />
                    <Subtitle>{movie.tagline}</Subtitle>
                    <Info>
                        <h3><BsWallet2 />Orçamento</h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </Info>
                    <Info>
                        <h3><BsGraphUp />Receita</h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </Info>
                    <Info>
                        <h3><BsHourglassSplit />Duração</h3>
                        <p>{movie.runtime} min</p>
                    </Info>  
                    <Info>
                        <h3><BsFillFileEarmarkTextFill />Descrição</h3>
                        <p>{movie.overview}</p>
                    </Info>
                </>}
        </MoviePage>
    )

}



export default Movie