import MiniCard from "../MiniCard"
import Titulo from "../Titulo"
import styled from "styled-components";
import skillsData from '../../data/skills.json'
import { useEffect, useState } from "react";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 30px;
    color: #464646;
    gap: 30px;
`
const DivCards = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: baseline;
`


const Skills = () => {

    const [skills, setSkills] = useState([]);
    
    useEffect(() => {
        // Carga los datos del archivo JSON
        setSkills(skillsData);
    }, []);
    
    return <>
    <Container id='skills'>
        <Titulo>Skills</Titulo>
        <DivCards>
            {skills.map((skill, index) => (
                <MiniCard 
                    key={index} 
                    title={skill.title} 
                    icon={skill.icon}/>
            ))} 
        </DivCards>
    </Container>
    </>

}
export default Skills