import styled from "styled-components"


const Boton = styled.button`
    display: flex;
    flex-direction: row;
    padding: 10px;
    height: 45px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    border: none;
    background-color: #331E65;
    color: white;
    
    :hover{
        background-color: #8A7FA4;
    }
`

const BotonMain = ({name, link}) => {

    return <>
        <Boton href={link}>{name}</Boton>
    </>
}

export default BotonMain