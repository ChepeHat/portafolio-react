
import BotonMain from '../Boton'
import CampoTexto from '../CampoTexto'
import CampoMensaje from '../CampoMensaje'
import styled from 'styled-components'

import imagen from './contact.png'

const SectionStyle = styled.section`
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
    height: 400px;
`

const Formulario = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;   
    box-sizing: border-box;
`




const Contact = () => {
    return (
    <>
    <SectionStyle>
        <img src={imagen} alt="contacto" />
        <Formulario >
            <CampoTexto
                label='Nombre'
                placeholder='Ejemplo: Juan Perez'
                required='required'
                type='text'
            />
            <CampoTexto
                label='Correo Electrónico'
                placeholder='Ejemplo: juanperez@correo.com'
                required='required'
                type='email'
            />
            <CampoTexto
                label='Asunto'
                placeholder='Ejemplo: Cotización'
                required='required'
                type='text'
            />
            <CampoMensaje
                label='Mensaje'
                placeholder='Escríbeme un mensaje'
                type='textarea'
            />
            <BotonMain name='Enviar mensaje' />
        </Formulario>

    </SectionStyle>
    </>
)
}

export default Contact