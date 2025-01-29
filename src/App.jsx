import DarkMode from './components/DarkMode.jsx'
import SideNav from './components/SideNav.jsx'
import Main from './components/Main.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className=' bg-gray-50 dark:bg-gradient-to-r from-purple-700 to-purple-950'>
      <DarkMode />
      <SideNav />
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
