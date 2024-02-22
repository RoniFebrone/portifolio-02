import Footer from './Pages/Footer/Footer'
import Navbar from './Pages/Navbar/Navbar'
import Presentation from './Pages/Presentation/Presentation'
import Projects from './Pages/Projects/Projects'
import Skills from './Pages/Skills/Skills'
import './global.scss'


function App() {


  return (
    <>
      <Navbar />
      <Presentation />
      <Projects />
      <Skills />
      <Footer />

      <div className='DR'>
        <p>
          Roni Febrone © 2023
        </p>
      </div>
    </>
  )
}

export default App
