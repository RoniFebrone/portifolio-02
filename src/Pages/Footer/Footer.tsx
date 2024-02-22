// import './index.scss'
// import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <div className='Footer'>
//             <div className='Footer__Contato'>
//                 <h2>Meu contato: <br /> (21) 97587-7461 </h2>
//                 <h2>Email: <br /> ronifebrone9@gmail.com </h2>
//             </div>
//             <div className='Footer__Redes'>
//                 <ul className='Footer__Redes--list'>
//                     <li> <a href='https://instagram.com/roninho_f?igshid=OGQ5ZDc2ODk2ZA==' target='Blank'> <FaInstagram size={24} /> </a></li>
//                     <li> <a href='https://www.linkedin.com/notifications/?filter=all' target='Blank'> <FaLinkedin size={24} /> </a></li>
//                     <li> <a href='https://github.com/RoniFebrone' target='Blank'> <FaGithub size={24} /> </a></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Footer

import {FaLinkedin, FaGithub } from "react-icons/fa";
import './index.scss'

function Footer() {
    return (
        <div className="footer">
            <p>
            Meu contato: <br /> (21) 97587-7461 
            </p>
            <p>
            Email: <br/>
            ronifebrone9@gmail.com
            </p>

            <ul>
                <li> <a href='https://www.linkedin.com/notifications/?filter=all' target='Blank'> <FaLinkedin size={42} /> </a></li>
                <li> <a href='https://github.com/RoniFebrone' target='Blank'> <FaGithub size={42} /> </a></li>
            </ul>
        </div>
    )
}

export default Footer