import styled from "styled-components";

const CardWrapper = styled.div`
    background-color: #060911;
    
`
const Title = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
`

export { CardWrapper, Title, Cards }