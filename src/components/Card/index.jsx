import "./Card.css"
import BotonMain from '../Boton'
import BotonSec from '../BotonSec'


const Card = (props) => {


const {image, title, subtitle, name, nameSec, linkSec, link} = props


    return <>
            <div className="card">
                <img src={image}/>                
                <div className="card_bottom">
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <a className="boton_container">
                        <BotonSec
                            nameSec={nameSec}
                            linkSec={linkSec}
                        />
                        <BotonMain
                            name={name}
                            link={link}
                        />
                    </a>    
                </div>
            </div>
    </>
}

export default Card