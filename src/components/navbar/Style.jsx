import styled from "styled-components"

const NavWrapper = styled.nav `
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    flex-wrap: wrap;
    background-color: #032541;
    margin-bottom: 2rem;

    a {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    form {
        display: flex;
        gap: .5rem;
    }

    input {
        padding: .2rem .8rem;
        border-radius: 5px;
        border: none;
    }

    button {
        background-color: #21b9d5;
        border: 2px solid #21b9d5;
        border-radius: 4px;
        color: #FFF;
        padding: .3rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all ease .5s;

        &:hover {
            background-color: #017aa2;
            border: 2px solid #017aa2;
        }
    }

    @media (max-width: 550px) {
        flex-direction: column;
        gap: 1rem;
    }
`


export default NavWrapper