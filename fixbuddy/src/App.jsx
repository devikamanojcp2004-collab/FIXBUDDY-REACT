import { useState } from 'react'
import './App.css'
import { LandingPage} from './components/landingpage/LandingPage'
import { UserPage } from './components/userpage/UserPage'
import { Employee } from './components/employee/employee'
import { Hiring } from './components/employee/Hiring'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import { BookingPage } from './components/userpage/BookingPage'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <BrowserRouter>
  <Routes>
      
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/booking" element={<BookingPage/>}/>
    <Route path="/user" element={<UserPage/>}/>
    <Route path="/employee" element={<Employee/>}/>
    <Route path="/hiring" element={<Hiring/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/signup" element={<Signup/>}/>



      </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
