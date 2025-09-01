import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import AboutPage from './components/About'
import ContactPage from './components/ContactPage'

function App() {

  return (
    <>
      <section id="home">
        <Header />
        <HomePage />
      </section>
      <AboutPage />
      <ContactPage />
    </>
  )
}

export default App
