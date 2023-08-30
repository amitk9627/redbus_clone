import React from 'react'
import './App.css'
import Home from './Home'
import Login from './Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SignUp from './SignUp'
const App = () => {
  return (
    <>
      
      <BrowserRouter>
     
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={ <Home /> } />
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App








