import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import AboutPage from './components/About'

function App() {

  return (
    <>
      <Header />
      <HomePage />
      <AboutPage />
    </>
  )
}

export default App
