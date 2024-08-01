import './Nav.css' 
import { Link } from "react-router-dom"

const Nav = () => {
    return <nav>
            <ul className="menu__list">
                <li> <a href="#about">Sobre mi</a> </li>
                <li> <a href="#skills">Skills</a> </li>
                <li> <a href="#hobbies">Hobbies</a> </li>
                <li> <a href="#academic">Formación</a> </li>
                <li> <a href="#experience">Proyectos</a> </li>
                <li> <a href="#contact">Contacto</a> </li>
            </ul>
            <li className="menu__list__item__contacto"><a href="#contacto">Contacto</a></li>
        </nav>
};

export default Nav