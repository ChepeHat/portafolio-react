import './SeeMore.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const SeeMore = (props) => {

    return <>
    <div className='seeMore'  onClick={props.cambiarMostrar}>
        <FaAngleUp size={20} className='seeMore__icon'  />
        <button className='seeMore__button'>
            <span> Ver todos </span>
        </button>
        <FaAngleDown size={20} className='seeMore__icon-active' />
    </div>
    </>
}

export default SeeMore
