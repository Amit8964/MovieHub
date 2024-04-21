import { Routes, Route } from "react-router-dom";
import Login from "./components/resistration/Login"
import SignUp from "./components/resistration/SignUp";
import Header from "./components/Layout/Header";
import Card from "./components/shared/Card";
import Home from "./components/home/Home";
import ShowMovie from "./components/movieDescription/ShowMovie";
function App() {
  return (
    
    <Routes>

<Route path="/" element={<Header/>}>

<Route path="/" element={<Home/>}/>

</Route>


<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path="/dev" element={<Card/>}/>
<Route path="/dev2" element={<ShowMovie/>}/>

    </Routes>
   
  );
}

export default App;
