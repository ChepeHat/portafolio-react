import './Profile.css' 
import { MdOutlineFileDownload } from "react-icons/md";
// import Redes from '../Redes';



const Profile = () => {
    return <section className="title">
        <div className="title__div">
            <img src="img\profile.png"/>
            <div className="title__container">
                <h1>Armando Sombrerero</h1>
                <h2>Diseñador Multimedia</h2>
                <h3>Comunicólogo especializado en diseño multimedia y desarrollador web Front End</h3>
                {/* <Redes /> */}
                <a href="https://drive.google.com/file/d/1P-U51mDC9Z2mQEwf0zlA7G3Sk_rHRGW5/view?usp=sharing" className='title__button-cv' target="_blank" rel="noopener noreferrer">
                    <span>Descargar CV</span>
                    <MdOutlineFileDownload size={22}/>
                </a>
            </div> 
        </div>
    </section>
};


export default Profile