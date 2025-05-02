import DarkMode from './components/DarkMode.jsx'
import SideNav from './components/SideNavigation.jsx'
import Main from './components/Main.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className=' overflow-hidden bg-gray-50 dark:bg-gradient-to-r from-purple-700 to-purple-950'>
      <DarkMode />
      <SideNav />
      <div>
        <Main />
        <Skills />
        <Projects />
        <Contact />
      </div>

    </div>
  )
}

export default App
