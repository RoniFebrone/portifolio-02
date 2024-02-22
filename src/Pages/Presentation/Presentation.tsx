import ButtonComponent from '../../Components/Button/ButtonComponent';
import './index.scss'
import { useState, useEffect } from 'react'

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = [' Roni Febrone   ', ' Desenvolvedor front-end! ', ' Futuro Full-stack  '];
    const [loop, setLoop] = useState(0);
    const [Deleting, setDeliting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(15)


    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {

        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = Deleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (!Deleting && updatedText === fullText) {
            setDeliting(true);
            setDelta(period);
        } else if (Deleting && updatedText === '') {
            setDeliting(false);
            setDelta(period);
            setLoop(loop + 1)
        }

    }


    return (
        <div className="presentation" id="Presentation">


            <h1>
                Olá, eu sou  <a href='https://www.linkedin.com/in/roni-febrone-97b007275/'>{text} </a>
            </h1>

            <p>
                <strong>Explorando o Universo Full Stack | Entusiasta do Mundo da Web | Comprometido com o Crescimento Profissional Constante</strong><br /><br />

                <strong>Sobre Mim:</strong> Olá! 👋 Me chamo Roni, um entusiasta de 21 anos apaixonado pelo desenvolvimento de software.
                Meu percurso teve início com uma imersão de 6 meses no desenvolvimento Back-end, adentrando no mundo desafiador do Java.<br /><br />

                <strong>Aventura Full Stack:</strong> Atualmente, estou me aprofundando em meus conhecimentos de back-end, após concluir a fase de front-end.
                Dominar o React e construir uma base sólida foram passos fundamentais nesta jornada de aprendizado.
                Foi um processo muito interessante no aprendizado de Front-end, fui colocado em diversas situações onde tive que me aprofundar bastante, e hoje tenho segurança
                em dizer que posso não saber tudo, mas <strong>sei encontrar a resposta!!</strong><br /><br />

                <strong>Pronto para a Ação!</strong><br />
                Com minha confiança em constante crescimento, meu objetivo é claro: ingressar no mercado de trabalho como um Desenvolvedor Full Stack.<br />
                Estou preparado para enfrentar os desafios do mundo real e contribuir significativamente para projetos que fazem a diferença.
            </p>

            <ButtonComponent text='Saber mais' link='https://www.linkedin.com/in/roni-febrone-97b007275/' />

            {/* <a href="https://www.linkedin.com/notifications/?filter=all" target='_blank'>
                <button className='btnPresentation'>
                    Conecte-se comigo!!
                </button>
            </a> */}

        </div>
    )
}

export default Presentation