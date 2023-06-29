import { useState } from 'react'
import AllShowList from './components/AllShowList'
import './App.css'
import Search from './components/Search'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Search />
      <Navbar />
      <AllShowList />
    
    </>
  )
}

export default App
