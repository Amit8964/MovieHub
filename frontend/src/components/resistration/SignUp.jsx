
import { Outlet, Link } from "react-router-dom"
import { useState } from "react";

import "./SignUp.css"


const SignUp = ()=>{

  

 const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Implement your login logic here
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
    return <>


      <div className="login-container">
        <h1 className="heading">MovieHub.com</h1>
<div className="login-box">



<div className="login-box-container">

  <h1>Sign Up</h1>
<div className="login-input-container">
    <input type="email" placeholder="email" />
    <input type="email" placeholder=" phone" />
    <input type="password" placeholder="password" />
</div>

<button className="login-button"> SignUp</button>

<p><span style={{color:"gray"}}>Allready have an account?  </span> <Link to={"/login"} style={{color:"#fff"}}> click here</Link> </p>


</div>
</div>

      </div>
      </>
}

export default SignUp;