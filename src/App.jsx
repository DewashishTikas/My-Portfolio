import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {

  return (
    <>
      <Header />
      <HomePage />
      <ProjectsPage />
      <AboutPage />
      <ContactPage />
    </>
  )
}

export default App
