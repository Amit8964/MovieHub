import "./Home.css"
import { useNavigate } from "react-router-dom";
import Hero from "./hero/Hero";
import Card from "../shared/Card";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import { useEffect, useState } from "react";
import { userLogout } from "../../slices/userSlice";


let arr = [1,2,3,4,5,6,7,8,9,78,9,7,8,9,10];


const Home = ()=>{

    const isLogin = useSelector((state)=>state.user.isLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [movieData, setMovieData] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    




    useEffect(()=>{
if(!isLogin) navigate("/login");
    }, [isLogin])

useEffect(()=>{

    let token = window.localStorage.getItem("token")
    axios.post("http://localhost:4000/getmovies/1", {token}).then((resp)=>{

if(resp.data.message){
    
window.localStorage.clear();
    dispatch(userLogout());

}else{

    setMovieData(resp.data);
    console.log(resp.data);
}



    })


},[])



    return <>
    <div className="homeContainer">

    <Hero/>

<div className="homeHeadingContainer">
<h1>Popular  <span style={{color:"red"}}>Collection</span></h1>
</div>

{movieData ?
    <div className="homeCardContainer">
    {movieData.map((key)=>{

        return <Card  { ...key }/>
    })}
    </div> : <h1 style={{marginTop:"400px", textAlign:"center"}}>Loading..</h1>

}
    <div className="nextButtonsContainer">
        {/* i will do it later */}
    </div>
   
    
    </div>
 
    
    </>
}

export default Home;