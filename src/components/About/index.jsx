import styled from "styled-components";
import Titulo from "../Titulo";


const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 40px;
    color: #464646;
    border-top: solid 3px #dde0e4;
    border-bottom: solid 3px #dde0e4;

    p {
        line-height: 22px;
        font-size: 15px;
        font-weight: 400;  
    }
`

const About = () => {
    return <> 
    <DivStyled id='about' className="about">
        <Titulo>Sobre mí</Titulo>
        <p>Soy un profesional orientado a resultados, con una sólida trayectoria en la dirección de proyectos de identidad institucional y campañas de gran escala.</p>
        <p>Mi experiencia abarca la creación de contenidos audiovisuales estratégicos que fortalecen la conexión entre el público y las marcas.</p>
        <p>En mi tiempo libre, mantengo un equilibrio saludable a través del ejercicio y desarrollo habilidades adicionales en áreas como el cine, la música y los videojuegos.</p>
    </DivStyled>
    </>
};

export default About