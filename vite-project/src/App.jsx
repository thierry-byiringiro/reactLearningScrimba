import { useState } from 'react'
import './App.css'
import MainContent from './ReactFacts_Projects/MainContent'
import Header from './ReactFacts_Projects/Header'
function App() {
  return (
    <>
      <div className='container'>
        <Header/>
        <MainContent />
      </div>
    </>
  )
}

export default App
