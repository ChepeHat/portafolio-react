import "./MiniCard.css"
// import { SiAdobephotoshop } from "react-icons/si";


const MiniCard = (props) => {


const {icon, title} = props

    return <>
            <div className="minicard">
                {/* <SiAdobephotoshop color="#6B47C4" className="minicard__icon" size={35}/> */}
                <img className="minicard__icon" src={icon}/>
                {/* <img src={icon}/> */}
                
                <h4>{title}</h4>
            </div>
    </>
}

export default MiniCard