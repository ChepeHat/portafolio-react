import "./SchoolCard.css"
import { PiCertificateDuotone } from "react-icons/pi";


const SchoolCard = ({icon, name, school, link, fecha}) => {


    return <>
        <ul className="academic__card">
            <li className="academic__card--school" >
                <img src={icon}/>
                <a className="card__school-name">
                    <h2>{name}</h2>
                    <h3>{school}</h3>
                </a>
            </li>
            <li className="academic__card--info" >
                <a href={link} target="_blank" rel="noopener noreferrer" className="academic__card--certificate" >
                    <PiCertificateDuotone size={25}/>
                </a>
                <p>Fecha de finalización: {fecha}</p>
            </li>

        </ul>
    </>
}

export default SchoolCard