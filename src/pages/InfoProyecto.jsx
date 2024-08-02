import { useParams } from "react-router-dom";
import About from "../components/About";

const InfoProyecto = () => {

    const {proyecto} = useParams();

    // Utiliza el parámetro "proyecto" para cargar los datos correspondientes
    //Map o Find para los diferentes Proyectos que vamos a mostrar
    const proyectoData = proyectos.find((item) => item.nombre === proyecto);

    return (
        <About/>
    )
}

export default InfoProyecto;