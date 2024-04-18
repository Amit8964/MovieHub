import { Routes, Route } from "react-router-dom";
import Login from "./components/resistration/Login"
import SignUp from "./components/resistration/SignUp";
import Header from "./components/Layout/Header";
import Card from "./components/shared/Card";
import Home from "./components/home/Home";
function App() {
  return (
    
    <Routes>

<Route path="/" element={<Header/>}>

<Route path="/home" element={<Home/>}/>

</Route>


<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path="/dev" element={<Card/>}/>


    </Routes>
   
  );
}

export default App;
