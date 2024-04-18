
import { Outlet, Link } from "react-router-dom"
import { useState } from "react";

import "./Login.css"


const Login = ()=>{

  

 const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Implement your login logic here
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
    return <>


      <div className="login-container">
        <h1 className="heading">MovieHub</h1>
<div className="login-box">



<div className="login-box-container">

  <h1>Sign In</h1>
<div className="login-input-container">
    <input type="email" placeholder="email or phone" />
    <input type="password" placeholder="password" />
</div>

<button className="login-button"> Sign In</button>

<p><span style={{color:"gray"}}>dont have an account?  </span> <Link to={"/signup"} style={{color:"#fff"}}> click here</Link> </p>


</div>
</div>

      </div>
      </>
}

export default Login;