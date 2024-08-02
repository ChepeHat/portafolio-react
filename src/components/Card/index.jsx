import "./Card.css"
import styled from "styled-components"
import { FaArrowRight } from "react-icons/fa";

const Boton = styled.a`
    color: #331E65;
    display: flex;
    justify-content: end;
    gap: 10px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    
`

const Card = ({image, title, subtitle, name, link}) => {


    return <>
            <div className="card">
                <img src={image}/>                
                <div className="card_bottom">
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <Boton target="_blank" rel="noopener noreferrer" href={link}>
                        {name}
                        <FaArrowRight size={15}/>
                    </Boton>
                    {/* <div className="boton_container">
                        <BotonSec link={link} name={name}/>
                    </div>     */}
                </div>
            </div>
    </>
}

export default Card