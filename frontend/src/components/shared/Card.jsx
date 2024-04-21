import "./Card.css"
import { useNavigate } from "react-router-dom";

const Card =({ image, _id })=>{

    const navigate = useNavigate();




const watch = (id)=>{

alert(_id)


}


    return <>
    <>
    <div className="cardContainer">
<div className="cardBox">
<div className="cardImg">
<img src={"http://localhost:4000/"+image} alt="not found" className="cardImg-image" />
</div>


<button className="watchNowBtn cardButton" onClick={()=>{watch(_id)}} >watch now</button>

</div>

 </div>
    
    </>
    
    
    </>
}

export default Card;