import styled from "styled-components";
import Banner from "../components/Banner";
import BackToHome from "../components/BackToHome";

const Content = styled.section`
    display: flex;
`

const Trabajos = () =>{
    return <>
        <Banner titulo='Experiencia Profesional'/>
        <Content>
            <div>
                <h2>Trabajos</h2>
            </div>
        </Content>
        <BackToHome/>
    </>
}
export default Trabajos;