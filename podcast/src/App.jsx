import { useState } from 'react'
import AllShowList from './components/AllShowList'
import './App.css'
import './index.css'

import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <AllShowList />
    
    </>
  )
}

export default App
