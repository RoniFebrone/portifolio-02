import './index.scss'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


import {Link} from 'react-scroll'

function Navbar() {
    return (
        <div className="navbar">
            <ul className="list1">
                <li><Link to="Presentation" smooth={true} duration={500} offset={-80}>Apresentação</Link></li>
                <li><Link to="Skills" smooth={true} duration={500} offset={-80}>Habilidades</Link></li>
                <li><Link to="Projects" smooth={true} duration={500} offset={-80}>Projetos</Link></li>
            </ul>
            <ul className="list2">
                <li> <a href='https://instagram.com/roninho_f?igshid=OGQ5ZDc2ODk2ZA==' target='Blank'> <FaInstagram size={24}/> </a></li>
                <li> <a href='https://www.linkedin.com/notifications/?filter=all' target='Blank'> <FaLinkedin size={24}/> </a></li>
                <li> <a href='https://github.com/RoniFebrone' target='Blank'> <FaGithub size={24}/> </a></li>
            </ul>
        </div>
    )
}

export default Navbar