import styled from 'styled-components';
import Foto from '../Banner'

const BannerImagen = styled.figure`
    background-image: url('img/gradiente.jpg');
    /* background: linear-gradient(to left, #6B47C4, #2C195A); */
    background-size: cover;
    background-position: center;
    width: 100;
    height: 300px;
    margin: 0;
`
const TituloBanner = styled.h2`
    color: #fff;
    font-size: 2.5rem;
    font-weight: 300;
    left: 8%;
    top: 50%;
    position: relative;
    line-height: 3.5rem;
`

const Banner = ( {titulo} ) => {
    return(
        <BannerImagen>
            <TituloBanner>{titulo}</TituloBanner>
        </BannerImagen>
    )
}

export default Banner;