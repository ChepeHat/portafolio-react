import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
`
const Texto = styled.p`
    font-size: 1.5rem;
    margin-left: 1rem;
`

const BackToHome = () => {
    return <>
    <StyledLink to='/'> 
        <FaArrowLeft size={22}/> 
        <Texto>Volver al Inicio</Texto>
    </StyledLink>
    </>
}

export default BackToHome