import './App.css'
import HomePage from './components/Homepage'
import Headder from './components/headder'
import AboutMe from './components/AboutMe'
import Skillset from './components/skillset'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import WorkExperience from './components/Workexperience'
function App() {
  return (
    <>
    <div className='themainparent'>
      <Headder/>
      <HomePage/>
      <AboutMe/>
      <Skillset/>
      <Projects/>
      <WorkExperience/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App
