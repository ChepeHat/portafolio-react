import "./JobCard.css"


const JobCard = (props) => {


const {logo, puesto, empresa} = props

    return <>
            <div className="jobcard">
                <img className="jobcard__logo" src={logo}/>                
                <h3>{puesto}</h3>
                <h4>{empresa}</h4>
            </div>
    </>
}

export default JobCard