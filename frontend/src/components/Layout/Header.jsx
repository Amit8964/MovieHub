import { links } from "../../Data";
import"./Header.css"
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { useMediaQuery } from "usehooks-ts";
import Hamburger from "./Hamburger";
import Hero from "../home/hero/Hero";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../slices/userSlice";
import { clamp } from "framer-motion";


const Header = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();


const match = useMediaQuery('(max-width: 1050px)')
console.log(match)



return <>

<div className="Header-container">

<div className="logo">
    <h1 >MovieHub</h1>
</div>

<div className="menu-container">

{!match && <ul>
    {links.map((key)=>{

        return <li>{key}</li>
    })}
    <button onClick={()=>{dispatch(userLogout())}}  style={{fontSize:".5rem",backgroundColor:"transparent",color:"red",border: '2px solid red',borderRadius:"8px",cursor:"pointer", marginLeft:"20px"}}><li>Log Out</li></button>

</ul>
}

<div className="search-box-container">

<input className="search-box" type="text" placeholder="search"/>
<FaSearch className="search-icon"/>
<CgProfile className="profile-icon"/>


</div>
<Hamburger/>

</div>
</div>


<Outlet/>
</>

}

export default Header;