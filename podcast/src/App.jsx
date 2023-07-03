import { useState } from 'react'
import { useEffect } from 'react'
import AllShowList from './components/AllShowList'
import './App.css'
import './index.css'

import Navbar from './components/Navbar'
import Header from './components/Header'
import PuffLoader from "react-spinners/PuffLoader";
import Episodes from './components/Episodes'
import Hero from './components/Hero'


function App() {
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
      }, 3000)
  }, []) 

  return (
    <div>
     {
       loading ?

       <PuffLoader
       color={"#a07e96"}
       loading={loading}
       size={80}
       aria-label="Loading Spinner"
       data-testid="loader"
     />

      :
    
      <>
      <Navbar />
      <Header />
      <Hero />
      <AllShowList />
    </>
}
    </div>
     
  )
}

export default App
