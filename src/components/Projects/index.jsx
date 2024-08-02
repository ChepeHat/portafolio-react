
import Card from '../Card'
import styled from 'styled-components'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px;
    color: #464646;
    border-top: solid 3px #dde0e4;
    border-bottom: solid 3px #dde0e4;
`

const ContainerCards = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    
`

const TituloStyle = styled.h2`
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    color: #464646;
`

const Projects = () => {
    return <Wrapper id='proyectos'>
        <TituloStyle>Proyectos</TituloStyle>
        <ContainerCards className="projects__cards">
            <Card
                image='./img/encriptador.png'
                title='Encriptador de Texto'
                subtitle='Challenge Alura Latam'
                nameSec='Repositorio'
                linkSec='https://github.com/ChepeHat/encriptador-alura'
                name='Ver Demo'
                link='https://chepehat.github.io/encriptador-alura/'
                />
            <Card
                
                image='./img/reel.png'
                title='Demo Reel'
                subtitle='Compilación de Producción + Postproducción'
                nameSec='Descargar'
                linkSec=''
                name='Ver Reel'
                link='https://www.youtube.com/watch?v=d4IAKKqA3q4'
                />
            <Card
                image='./img/portafolio.png'
                title='Portafolio Profesional'
                subtitle='Administración Pública'
                nameSec='Descargar'
                linkSec=''
                name='Ver Portafolio'
                link='https://online.fliphtml5.com/akxmx/bkpa/'
                />
        </ContainerCards>
    </Wrapper>
}
export default Projects