import styled from "styled-components";
import BackToHome from "../components/BackToHome";
import Banner from "../components/Banner";
import { Card } from "@mui/material";
import MultiActionAreaCard from '../components/MuiCard'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 40px;
    color: #464646;
    
    & .formacion_titulo{
        text-align: center;
        font-size: 30px;
        font-weight: 600;   
    }
`

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: start;
    
`


const Proyectos = () => {


    return <>
        <Banner titulo='Proyectos'/>
        <Wrapper>
            <Container>
                <MultiActionAreaCard 
                    image='./img/reel.png'
                    title='Campañas de Gobierno'
                    subtitle='Gobierno del Estado de Puebla'
                />
                <MultiActionAreaCard 
                    image='./img/reel.png'
                    title='Diseño Gráfico'
                    subtitle='Gobierno del Estado de Puebla'
                />
                <MultiActionAreaCard 
                    image='./img/reel.png'
                    title='Fiestas Patrias 2022'
                    subtitle='Gobierno del Estado de Puebla'
                />
                <MultiActionAreaCard 
                    image='./img/reel.png'
                    title='Invitaciones Digitales'
                    subtitle='Gobierno del Estado de Puebla'
                />
            </Container>
            <BackToHome/>

        </Wrapper>
        </>
}

export default Proyectos 