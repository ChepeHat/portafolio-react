import { useState, useEffect} from "react";
import SchoolCard from "../components/SchoolCard"
import formacionData from '../data/formacion.json'
import styled from "styled-components";
import BackToHome from "../components/BackToHome";
import Banner from "../components/Banner";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #e0e0e0;
    padding: 40px;
    color: #464646;
    
    & .formacion_titulo{
        text-align: center;
        font-size: 30px;
        font-weight: 600;   
    }
`

const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: baseline;
    
`


const Formacion = () => {

    const [formacion, setFormacion] = useState([]);
    
    useEffect(() => {
        // Carga los datos del archivo JSON
        setFormacion(formacionData);
    }, []);
    

    return <>
        <Banner titulo='Formación Académica'/>
        <Wrapper>
            <Container>
                {formacion.map((formacion, index) => (
                    <SchoolCard
                        key={index}
                        icon = {formacion.icon} 
                        name = {formacion.name}
                        school = {formacion.school}
                        link = {formacion.link}
                        fecha = {formacion.fecha}
                    />
                ))}
            </Container>
            <BackToHome/>
            

        </Wrapper>
        </>
}

export default Formacion 