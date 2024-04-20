import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../slices/userSlice";
import axios from "axios"

import "./Login.css"


const Login = ()=>{

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state)=>state.user.isLogin);
  const [message, setmessage] = useState("");
  const [userData, setUserData] = useState("");


  
  const handleInput = (e)=>{

    setUserData((prev)=>{ 
      console.log(userData)
      return {
    ...prev,
    [e.target.name]:e.target.value 
      }
    })
    
 };





 const Login = async () => {
  axios.post("http://localhost:4000/login", userData).then(data => {

      if (data.status == 200) {
          if (data.data.userlogin) {
              //if user is login is true redirect to the home page
              console.log(data.data);
              window.localStorage.setItem("token",data.data.token)
              dispatch(userLogin(data.data))
              navigate("/home")                                                                     
          }
          else {
              //if user login is not true set a message to show on the screen
              console.log(data)     
              if (data.data.message.length > 0) {   
               
                  // toast.error(` ${data.data.message} `, {
                  //   position: "top-right",
                  //   autoClose: 5000,
                  //   hideProgressBar: false,
                  //   closeOnClick: true,
                  //   pauseOnHover: true,
                  //   draggable: true,
                  //   progress: undefined,
                  //   theme: "light",
                   
                  //   })  

                  setmessage(data.data.message)                      
              }   
          }     
      }
      else {
          alert("something went wrong")
      }
  })       
}









  
    return <>

      <div className="login-container">
        <h1 className="heading">MovieHub</h1>
<div className="login-box">

<div className="login-box-container">

  <h1>Sign In</h1>
<div className="login-input-container">
    <input type="email" placeholder="email or phone" name="email" onChange={handleInput} />
    <input type="password" placeholder="password" name="password" onChange={handleInput} pattern="[a-zA-Z0-9]+" title="Only alphanumeric characters are allowed" required />
</div>

<button className="login-button" onClick={Login}> Sign In</button>

<p><span style={{color:"gray"}}>dont have an account?  </span> <Link to={"/signup"} style={{color:"#fff"}}> click here</Link> </p>


</div>
</div>

      </div>
      </>
}

export default Login;