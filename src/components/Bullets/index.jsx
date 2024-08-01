import './Bullets.css' 
import { GiMexico } from "react-icons/gi";

const Bullets = () => {
    return <>
    <div className="bullets">
        <a className="bullets__exp">
            {/* <img src="img/5.svg"/> */}
            <h3>8</h3>
            <h4>Años de Experiencia</h4>
        </a>
        <a className="bullets__exp">
            {/* <img src="img/200.svg"/> */}
            <h3>+200</h3>
            <h4>Proyectos de Identidad Institucional</h4>
        </a>
        <a className="bullets__exp">
            <GiMexico size={60} color='#464646' className='bullets_icon' />
            <h4>Campañas a Nivel Nacional</h4>
        </a>
    </div>
    </>
};


export default Bullets