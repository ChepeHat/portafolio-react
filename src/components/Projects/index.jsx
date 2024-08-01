import './Projects.css'
import Card from '../Card'

const Projects = () => {
    return <>
        <div className="projects__cards">
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
        </div>
    </>
}
export default Projects