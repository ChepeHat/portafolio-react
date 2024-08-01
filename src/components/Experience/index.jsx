import './Experience.css'
import JobCard from '../JobCard/'
import Colaborations from '../Colaborations/'
import Projects from '../Projects'
import jobsData from '../../data/experiencia.json'
import { useState, useEffect} from 'react'

const Experience = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        setJobs(jobsData);
    }, [])
    

    return <>
    <section id='experience'  className="jobs">
        <h2>Experiencia Profesional</h2>
        <div className="jobs__cards">
            {jobs.map((job, index) => (
                <JobCard 
                    key={index} 
                    puesto={job.puesto} 
                    empresa={job.empresa} 
                    logo={job.logo} />
            ))}
        </div>
        <Projects />
    </section>
    <Colaborations/>
    
    </>

}
export default Experience