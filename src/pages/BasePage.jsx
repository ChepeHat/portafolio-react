
import Header from '../components/Header/Header.jsx';
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`
const Content = styled.div`
    justify-content: center;
    flex: 1; /* Agrego flexibilidad para que ocupe el espacio restante */
    width:1280px;
    max-width:100%;
    margin: 0 auto;
    background-color:  var(--background2);
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */

    border-left: solid 3px #dde0e4;
    border-right: solid 3px #dde0e4;
`

function BasePage(){

    return (
        <>
        <Wrapper>
            <Header/>
            <Content>
                <Outlet/>
            </Content>
            <Footer/> 
        </Wrapper>
        </>
    )
}

export default BasePage
