import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa'
import { imageURL } from "../../Variables"

import Card from "./Style"

const MoviesCards = ({ movie, showLink = true }) => 
     (
        <Card>
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </Card>
    )


export default MoviesCards