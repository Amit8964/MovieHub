import "./Hamburger.css"
import { FaBars } from "react-icons/fa6";
import { useMediaQuery } from 'usehooks-ts'
import { links } from "../../Data"
import { motion } from "framer-motion"
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";

const Hamburger = ()=>{


    const match = useMediaQuery('(max-width: 1050px)')
    const [open , setopn] = useState(false)
    const variants = {

        open:{
            
           scale:1,
           x:80,
           y:0,
            clipPath: "circle(350px at 350px 100px)",
        transition:{
        
            type: "spring",
            stiffness:600,
            damping:100
            
        }
        
        },
        close:{
          
            scale:0,
            x:400,
            y:-250,
        transition:{
            type: "spring",
            stiffness:600,
            damping:10,
            staggerChildren:10
            
        }
        
        }
        
        }


        const childVariants = {

            open:{
                x:100
            },
            close:{
             x:-100
            },
            transition:{
                duration:5
            }
        }




    return <>



<div className={match ? "hamburger" :"hide"} >
{
open?<ImCross className={"icon"}  onClick={()=>{setopn(false)}} />:<FaBars className={"icon"} onClick={()=>{setopn(true)}}  />

}

</div> 


<motion.div className={match ? "popup-container" : "hide"} variants={variants} initial={"close"} animate={open ? "open":"close"} >





<motion.div className="popup-links" layout>

{links.map((key, idx)=>{


return <motion.li key={idx} variants={childVariants}  layout onClick={()=>{setopn(!open)}} > <Link style={{textDecoration:"none",color: "#fff"}} to={key}> {key}</Link> </motion.li >


})}
    
</motion.div>


    </motion.div>

 
    
    </>
}



export default Hamburger;
