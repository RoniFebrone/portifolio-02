import './index.scss'

import JS from '../../Images/Skill/JS.svg'
import html from '../../Images/Skill/html.svg'
import css from '../../Images/Skill/css.svg'
import ReactImg from '../../Images/Skill/ReactImg.svg'
import Java from '../../Images/Skill/Java.svg'
import UiUx from '../../Images/Skill/UiUx.svg'
import Figma from '../../Images/Skill/Figma.svg'
import Ts from '../../Images/Skill/Ts.svg'


function Skills() {
    return (
        <div className="flexSkill">
            <section className="skills" >
                <h1>Habilidades</h1>
                <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
                <div>
                    <img src={JS} />
                    <img src={ReactImg} />
                    <img src={Ts} />
                    <img src={Java} />
                    <img src={html} />
                    <img src={css} />
                    <img src={UiUx} />
                    <img src={Figma} />
                </div>
            </section>
        </div>
    )
}

export default Skills