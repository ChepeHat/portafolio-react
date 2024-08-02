import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const Button = styled.button`
    display: flex;
    flex-direction: row;
    padding: 10px;
    height: 45px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    background-color: #F5F5F5;
    border: 1px solid #331E65;
    color: #331E65;
    gap: 10px;
    
    &:hover {
        background-color: #331E65;
        color: #F5F5F5;
    }
`

const BotonSec = ({name, link}) => {

    return (
        <Button>
            <a target="_blank" rel="noopener noreferrer" href={link}>{name}</a>
            <FaArrowRight size={15}/>
        </Button>
    )
}

export default BotonSec