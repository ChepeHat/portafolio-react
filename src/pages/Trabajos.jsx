import styled from "styled-components";
import Banner from "../components/Banner";
import BackToHome from "../components/BackToHome";
import JobCardFull from "../components/JobCardFull";
import JobsData from '../data/experiencia.json'
import { useEffect, useState } from "react";


const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 2rem auto;
    gap: 20px;
    padding: 2rem;
    
`

const Trabajos = () =>{

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        setJobs(JobsData)
    }, [])
    

    return <>
        <Banner titulo='Experiencia Profesional'/>
        <Wrapper>
            {jobs.map((job, index) => (
                <JobCardFull key={index}
                    logo={job.logo}
                    fecha={job.fecha} 
                    puesto={job.puesto}
                    empresa={job.empresa}
                    descripcion={job.descripcion} />
            ))}

        </Wrapper>
        <BackToHome/>
    </>
}
export default Trabajos;