import styled from 'styled-components'

const Card = styled.div`
    max-width: 30%;
    color: #FFF;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #111;
    padding: 1rem;
    border-radius: 8px;

    img {
        max-width: 100%;
    }

    img, h2, p {
        margin-bottom: 1rem;
    }

    svg {
        color: #017aa2;
    }

    a {
        background-color: #032541;
        color: #c3c3c3;
        border-radius: 8px;
        text-align: center;
        padding: .9rem .4rem;
        transition: all ease .5s;

        &:hover {
            background-color: #017aa2;
            color: #FFF;
        }
    }
    
    @media (max-width: 550px) {
        img, h2, p {
            margin-bottom: .5rem;
        }

        h2 {
            font-size: 1rem;
        }
    }

`


export default Card