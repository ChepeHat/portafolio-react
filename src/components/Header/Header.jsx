
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import styled from 'styled-components';

/*Seccion Menu*/

const HeaderStyle = styled.header`
    height: 60px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /*Desktop*/
    @media (min-width: 1024px) {
        padding: 20px 3rem;
        width:1280px;
        max-width:100%;
        margin: 0 auto;
        box-sizing: border-box;
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;   

    & img {
        height: 30px;
    }
`

const Header = () => {
    return (<HeaderStyle>
        <Link to='/' >
                <Container className="menu__header">
                <img src="img/ufo-hat.svg"/>
                <h3 className="menu__title">Armando Sombrerero</h3>
                </Container>
        </Link>
        < Nav />
</HeaderStyle>
    );
};


export default Header