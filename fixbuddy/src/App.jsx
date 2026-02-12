import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './pages/Header'
import { LandingPage} from './components/landingpage/LandingPage'
import { Footer } from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
      <Header/>
      <LandingPage/>
      
      <Footer/>
   </>
  )
}

export default App
