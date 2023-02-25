import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Header from"./Components/Header"
import SignUp from "./pages/SignUp"
const App = () => {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path= "/about" element ={<About></About>}></Route>
      <Route path ="/sign-in" element={<SignIn></SignIn>}></Route>
      <Route path="/sign-up" element ={<SignUp></SignUp>}></Route>
    </Routes>
    </BrowserRouter></>
  )
}

export default App