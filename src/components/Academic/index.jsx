import { useState } from "react";
import './Academic.css'
import SchoolCard from "../SchoolCard"
import SeeMore from '../SeeMore'
import { Link } from "react-router-dom";


const Academic = () => {

    // const [mostrarFormacion, actualizarMostrar] = useState(false);

    // const cambiarMostrar = () => actualizarMostrar(!mostrarFormacion);

    return <>
        <section id='academic' className="academic">
            <h2>Formación Academica</h2>
            <div className="academic__cards">
                <SchoolCard 
                    icon='/img/logobuap.svg' 
                    name='Licenciatura en Comunicación' 
                    school='Benemérita Universidad Autónoma de Puebla' 
                    link='https://www.buap.mx/' 
                    fecha='2016'
                />
                <SchoolCard 
                    icon='/img/oracle-one.svg' 
                    name='Programa Oracle Next Education F2 T6 Front-end' 
                    school='Oracle Next Education + Alura Latam' 
                    link='https://app.aluracursos.com/user/josesombrerero/program/15/certificate' 
                    fecha='2024'
                />
                <SchoolCard 
                    icon='/img/inovacao-gestao.svg' 
                    name='Emprendimiento, Agilidad y Protagonismo Profesional' 
                    school='Oracle Next Education + Alura Latam' 
                    link='https://app.aluracursos.com/user/josesombrerero/degree-emprendimiento-agilidad-y-protagonismo-profesional-grupo6-one-15718/certificate' 
                    fecha='2024'
                />   
            </div>
            <Link to='/formacion'> <SeeMore/> </Link>
            {/* {mostrarFormacion && ( <div className="academic__cards">
                <SchoolCard 
                    icon=''
                    name='' 
                    school='' 
                    link='' 
                    fecha=''
                />
            </div>
            )} */}
            {/* <SeeMore cambiarMostrar={cambiarMostrar}/> */}
        </section>
        </>
}

export default Academic 