import { useState } from 'react'
import './App.css'
// import MainContent from './ReactFacts_Projects/MainContent'
// import Header from './ReactFacts_Projects/Header'
import Header from './TravellingJournal/Header'
import Entry from './TravellingJournal/Entry'
function App() {
  return (
    <>
      {/* <div className='container'>
        <Header/>
        <MainContent />
      </div> */}



      <div className='fulah'>
        <Header />
        <Entry />
      </div>
    </>
  )
}

export default App
