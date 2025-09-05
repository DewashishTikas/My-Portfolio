import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ProjectsPage from './components/ProjectsPage'

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
