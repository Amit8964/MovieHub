
import { Outlet, Link } from "react-router-dom"
import { useState } from "react"

import "./SignUp.css"
import axios from "axios";


const SignUp = ()=>{

  

  const [userData, setUserData] = useState("")


  const handleInput = (e)=>{
    setUserData((prev)=>{ 
      console.log(userData)
      return {
    ...prev,
    [e.target.name]:e.target.value 
      }
    })
    
 };
  
    const resister = () => {
      // logic is pending now
      axios.post("http://localhost:4000/setuser", userData).then((resp)=>{

console.log(resp)

      })
      



    };
  
    return <>


      <div className="login-container">
        <h1 className="heading">MovieHub.com</h1>
<div className="login-box">



<div className="login-box-container">

  <h1>Sign Up</h1>
<div className="login-input-container">
    <input type="text" placeholder="Enter Your Name" name="name" onChange={handleInput}/>
    <input type="email" placeholder="Enter Your Email" name="email" onChange={handleInput}/>
    <input type="text" placeholder="Enter Your  Number" name="mobile" onChange={handleInput} />
    <input type="password" placeholder="Enter Your Password" name="password" onChange={handleInput} />
</div>

<button className="login-button" onClick={resister}> SignUp</button>

<p><span style={{color:"gray"}}>Allready have an account?  </span> <Link to={"/login"} style={{color:"#fff"}}> click here</Link> </p>


</div>
</div>

      </div>
      </>
}

export default SignUp;