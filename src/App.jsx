import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Projects from './components/Projects'
import Contact from './components/Contact'
import DarkMode from './components/DarkMode'

function App() {
  return (
    <div className=' bg-gray-50 dark:bg-gradient-to-r from-purple-700 to-purple-950'>
      <DarkMode />
      <Sidenav />
      <Main />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
