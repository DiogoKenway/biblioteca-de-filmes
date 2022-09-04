import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import NavWrapper from './Style'

const Navbar = () => {

const [search, setSearh] = useState("")

const navigate = useNavigate()

const handleSubmit = e => {
    e.preventDefault()
    
    if(!search) return

    navigate(`/search?q=${search}`)
    setSearh("")
}

    return (
        <NavWrapper>
            <h2>
                <Link to="/">
                    <BiCameraMovie /> Biblioteca de Filmes
                </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Busque um filme'
                onChange={e => setSearh(e.target.value)}
                value={search} />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </NavWrapper>
    )
}


export default Navbar