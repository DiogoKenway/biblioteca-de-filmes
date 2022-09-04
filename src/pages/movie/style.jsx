import styled from "styled-components";

const MoviePage = styled.div`
    color: #FFF;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 2rem auto;
    background-color: #111;
    padding: 2rem;
    border-radius: 8px;
    gap: 2rem;
    text-align:center;

    h2 {
        font-size: 2.3rem;
        text-align:center;
    }

    svg {
        font-size: 1.5rem;
        color: #017aa2;
    }

    img, h2 {
        max-width: 100%;
        margin-bottom: 1rem;
    }

    span {
        display: block;
        margin-top: 12px;
        font-size: 1.1rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.3rem;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
    align-items: flex-start;
    text-align: start;

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
    }

    p {
        line-height: 1.5rem;
    }
    
`



export { MoviePage, Info, Subtitle }