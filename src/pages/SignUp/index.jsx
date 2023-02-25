import React from 'react'

import { useState } from 'react'
import { Navigate, redirect, useNavigate } from 'react-router-dom'
function SignUp() {

    const navigate = useNavigate()
    // const {history} = useHistory

    const [name, setName]=useState("")
    
    const changetext=(el)=>{
        setName(el.target.value)
        console.log(name);
    }
  return (
<div>
    <div className="conteiner">
        <div style={{display:"flex",justifyContent:"center"}}><h1>
            Sign up</h1></div>
       
            <form>
    <div className='mb-3'>
        <label>Username</label>
        <input type='text' placeholder="Enter Username" className='form-control' onChange={changetext}></input>
    </div>
    <div className='mb-3'>
        <label>Password</label>
        <input type='text' placeholder="Enter Password" className='form-control'></input>
    </div>
    <button type='submit' className='btn btn-primary' style={{marginLeft:"130px"} } onClick={() => {
					navigate("/")
				}}>Submit</button>
            </form>
      

    </div>
</div>
  )
}

export default SignUp