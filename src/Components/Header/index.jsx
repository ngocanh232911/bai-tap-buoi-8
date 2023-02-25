import React from 'react'
import {Link } from "react-router-dom"
import "./style.css"
const Header = () => {
  return (
    <div id='header'>
        <h1> SHOPEE </h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}> About</Link>
        <Link to={"sign-in"}>Sign-in</Link>
        <Link to={"sign-up"}>Sign-up</Link>
    </div>
  )
}

export default Header