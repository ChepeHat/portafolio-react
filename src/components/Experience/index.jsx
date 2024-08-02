import './Experience.css'
import JobCard from '../JobCard/'
import jobsData from '../../data/experiencia.json'
import { useState, useEffect} from 'react'
import SeeMore from '../SeeMore'
import { Link } from 'react-router-dom'

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
        <Link to='/experiencia'> <SeeMore/> </Link>
    </section>
    
    </>

}
export default Experience