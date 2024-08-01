import styled from "styled-components";

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
    
    :hover {
        background-color: #8A7FA4;
    }
`

const BotonSec = ({nameSec, linkSec}) => {

    return <>
        <Button href={linkSec}>{nameSec}</Button>
    </>
}

export default BotonSec