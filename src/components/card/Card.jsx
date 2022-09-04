import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { imageURL } from '../../Variables'
import { formatNumber } from '../../assets/Functions'

const Card = ({ movie, showLink = true }) =>
(
    <div>
        <img src={`${imageURL + movie.poster_path}`} alt={`${movie.title}`} />
        <h2>{movie.title}</h2>
        <div>
            <FaStar /> {formatNumber(movie.vote_average)}
            <>{movie.genres.map(genre => 
                <span key={genre.id}>{genre.name}</span>)}
            </>
        </div>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
)


export default Card