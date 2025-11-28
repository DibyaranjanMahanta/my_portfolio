import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
         <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App