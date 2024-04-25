import React from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import DarkMode from './components/DarkMode'

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
