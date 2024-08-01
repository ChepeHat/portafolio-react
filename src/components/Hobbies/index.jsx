
import styled from "styled-components";
import MiniCard from "../MiniCard"
import Titulo from "../Titulo"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 30px;
    color: #464646;
    gap: 30px;
`
const DivCards = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: baseline;
`


const Hobbies = () => {
    return <>
    <Container id='hobbies'>
        <Titulo>Hobbies</Titulo>
        <DivCards>
            <MiniCard title='Gym' icon='./img/gym.svg'/>
            <MiniCard title='Videojuegos' icon='./img/game.svg'/>
            <MiniCard title='Ver series' icon='./img/tv_icon.svg'/>
            <MiniCard title='Senderismo' icon='./img/hike.svg'/>
        </DivCards>
    </Container>
    </>

}
export default Hobbies