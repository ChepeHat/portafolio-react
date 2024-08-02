import './Redes.css' 
import { FaLinkedin, FaGithub, FaBehanceSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




const Redes = () => {
    return <div className="title__network">
                    <a href="https://www.linkedin.com/in/armandosombrerero/">
                        <FaLinkedin className='icon' size={30} />
                        <h4>Linkedin</h4>
                    </a>
                    <a href="https://www.behance.net/chepehat">
                        <FaBehanceSquare className='icon' size={30} />
                        <h4>Behance</h4>
                    </a>
                    <a href="https://github.com/ChepeHat">
                        <FaGithub className='icon' size={30} />
                        <h4>Github</h4>
                    </a>
                    <a href="https://x.com/chepehat">
                        <FaSquareXTwitter className='icon'  size={30}  />
                        <h4>Twitter</h4>
                    </a>
                    {/* <a  href="/CV-Armando-Sombrerero.pdf" id="descargarCv">
                        <IoDocumentText className='icon'  size={30}/>
                        <h4>Descargar CV</h4>
                    </a> */}
                </div>
};


export default Redes