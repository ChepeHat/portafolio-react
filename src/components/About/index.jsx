import styled from "styled-components";
import Redes from '../Redes'
import { FaQuoteLeft } from "react-icons/fa6";


const DivStyled = styled.div`
    display: flex;
    position: relative;
    gap: 5px;
    padding: 40px;
    color: #464646;
    background-color: white;
    border-radius: 20px;
    margin: 2rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.100);
    gap: 30px;

    p {
        line-height: 22px;
        font-size: 15px;
        font-weight: 400;  
    }

    @media (min-width: 1024px){
        background-image: url('img/banner-profile.jpg');
        background-size: cover;
        background-position: center;
        padding: 60px 100px 60px 500px;
    }
    
`
const Icono = styled.div`
    position: absolute;
    top: -37px;
    right: 30px;
    color:  var(--background2);
    transform: scaleX(-1);
`

const TituloStyle = styled.h2`
    text-align: start;
    font-size: 22px;
    font-weight: 600;
    color: #464646;
`

const Texto = styled.div`
    @media (min-width: 1024px){
    
    }
`

const Imagen = styled.img`
    display: none;
    
    @media (min-width: 1024px){
        display: flex;
        width: 0%;
        border-radius: 35px;
    }
`

const About = () => {
    return <> 
    <DivStyled id='about'>
        <Icono>
            <FaQuoteLeft size={120} />
        </Icono>
        <Texto>
            <TituloStyle>Sobre mí</TituloStyle>
            <p>
                Soy una persona comprometida con la excelencia y con un <strong>historial probado</strong> en la <strong>gestión de proyectos</strong> de identidad institucional y campañas a nivel nacional.
            </p>
            <p>
                Tengo experiencia en la <strong>creación de contenidos audiovisuales</strong> que <strong>conectan eficazmente</strong> a las marcas con su <strong>público objetivo</strong>.
            </p>
            <Redes />
        </Texto>
    </DivStyled>
    </>
};

export default About