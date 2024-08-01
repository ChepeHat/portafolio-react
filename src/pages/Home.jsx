
// import '../App.css'
import Profile from '../components/Profile';
import Bullets from '../components/Bullets';
import About from '../components/About';
import Skills from '../components/Skills';
// import Hobbies from "../components/Hobbies";
import Academic from "../components/Academic";
import Experience from "../components/Experience";
// import Contact from './components/Contact';


function Home(){

    return (
        <>
        <Profile />
        <Bullets />
        <About /> 
        <Skills />
        {/* <Hobbies /> */}
        <Academic />
        <Experience />
        {/* <Contact /> */}
        </>
    )
}

export default Home
