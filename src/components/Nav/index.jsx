import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { IoMenu } from "react-icons/io5";
import { useEffect, useRef, useState } from 'react';

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: relative;

    @media (min-width: 1024px) {
        justify-content: flex-end;
    }
`
const MenuIcon = styled(IoMenu)`
    font-size: 2rem;
    cursor: pointer;

    @media (min-width: 1024px) {
        display: none;
    }
`


const Lista = styled.ul`
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    list-style: none;
    margin: 0;
    background-color: var(--background);

    position: absolute;
    top: 100%; /* Para que el menú aparezca justo debajo del header */
    left: -80px;
    width: 250px; /* Para que el menú tenga el mismo ancho que el nav */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Sombra para destacar el menú */
    z-index: 1; /* Para asegurar que el menú esté por encima de otros elementos */
/*     
    :nth-child(2), :nth-child(4){
        background-color: #dedcdc;
    } */

    & li {
        padding: 20px;
        color: white;
        background: #464646;
        border-bottom: solid 2px #a3a1a1;

        &:hover{
            background: linear-gradient(to right, #6B47C4, #2C195A);
            color: white;
        }
    }

/* 
    :nth-child(6){
        font-weight: 800;
    } */

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        position: static; /* Volver a la posición estática en pantallas grandes */
        box-shadow: none; /* Quitar sombra en pantallas grandes */
        width: 100%;
        gap: 20px;
        

        & li {
        padding: 10px;
        background: none;
        color: #464646;
        border: none;

        &:hover{
            background: linear-gradient(to right, #6B47C4, #2C195A);
            color: white;
        }
    }
    }
`


const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if(menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            } else {
                document.removeEventListener('mousedown', handleClickOutside);
            }
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            }}, [menuOpen]);

            const handleMenuClick = () => {
                setMenuOpen(!menuOpen);
            };
            
            const handleLinkClick = () => {
                setMenuOpen(false);
            };
    

    return <NavBar>
            <MenuIcon onClick={handleMenuClick} 
            />
            <Lista ref={menuRef} open={menuOpen}>
                <li> 
                    <Link smooth to='/#about' onClick={handleLinkClick} >Sobre mi </Link>  
                </li>
                <li>  
                    <Link smooth to='/#skills' onClick={handleLinkClick} >Skills</Link>
                </li>
                {/* <li> <a href="#hobbies">Hobbies</a> </li> */}
                <li> 
                    <Link to='/formacion' onClick={handleLinkClick}>Formación</Link> 
                </li>
                <li> 
                    <Link to='/experiencia' onClick={handleLinkClick}>Experiencia</Link> 
                </li>
                <li> 
                    <Link smooth to='/#proyectos'onClick={handleLinkClick}>Proyectos</Link> 
                </li>
                {/* <li> 
                    <Link to="#contact" onClick={handleLinkClick}>Contacto</Link> 
                </li> */}
            </Lista>
        </NavBar>
        
};

export default Nav