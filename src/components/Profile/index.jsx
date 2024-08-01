import './Profile.css' 
import Redes from '../Redes';

const Profile = () => {
    return <section className="title">
        <div className="title__div">
            <img src="img\profile.png"/>
            <div className="title__container">
                <h1>Armando Sombrerero</h1>
                <h2>Diseñador Multimedia</h2>
                <h3>Comunicólogo especializado en diseño multimedia y desarrollador web Front End</h3>
                <Redes />
            </div> 
        </div>
    </section>
};


export default Profile