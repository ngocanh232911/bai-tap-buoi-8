import React from 'react'
import {useNavigate} from 'react-router-dom'

const Signin = () => {
	const navigate = useNavigate();
	return (
		<div>
            <div id="Signin">
      <form>
    <label>
      Name: <br></br>
      <input type="text" name="name" />
    </label><br></br>
    <label>
      Password: <br></br>
      <input type="text" name="name" />
    </label>
    
  </form>
          
      </div>
			<button 
				onClick={() => {
					navigate("/")
				}}
			>
				Login
			</button>
		</div>
	)
}
export default Signin