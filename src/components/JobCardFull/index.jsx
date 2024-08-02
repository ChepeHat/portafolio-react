import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.100);


    /*Tablet*/
    @media (min-width: 768px) {
    flex-direction: row;

    }
`

const DivCard = styled.div`
    margin: 20px;
    line-height: 1.5rem;
    color: #464646;
    border-left: solid 2px #6B47C4;
    padding-left: 30px;

    & h1 {
        font-size: 2.2rem;
        line-height: 3rem;
        margin: 15px 0;
    }

    & h2 {
        font-size: 1.2rem;
        font-weight: 500;
    }

    & h3 {
        font-size: 1rem;
        font-weight: 600;
        color: #464646;
        text-transform: uppercase;
        border: solid 1px #6B47C4;;
        border-radius: 50px;
        padding: 10px;
        display: inline-block;
    }

`

const ImgContainer = styled.div`
        display: none;

        /*Tablet*/
        @media (min-width: 768px) {
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 30px;

            & img {
                width: 200px;
            }
        }

`

const JobCardFull = ({ logo, fecha, puesto, empresa, descripcion }) => {
    return(
        <CardContainer>
            <ImgContainer>
                <img src={logo} />
            </ImgContainer>
            <DivCard>
                <h3>{fecha}</h3>
                <h1>{empresa}</h1>
                <h2>@{puesto}</h2>
                <p>{descripcion}</p>
            </DivCard>
        </CardContainer>
    )
}

export default JobCardFull;