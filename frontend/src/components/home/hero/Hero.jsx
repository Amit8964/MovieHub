import "./Hero.css"
import { IoIosStar } from "react-icons/io";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };





const HeroSlider = ()=>{


    return <>
    <div className="heroSliderContainer">

<div className="HeroSliderImg">
<div className="HeroBox">
<p className="heroRating">Ratings: 3.5 <span ><IoIosStar className="starIcon" /></span></p>
<button className=" watchNowBtn">Watch Now</button>

</div>
</div>
</div>
    </>
}



const Hero = ()=>{



return <>



<Carousel responsive={responsive}
  swipeable={true}
  draggable={true}
  showDots={true}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  keyBoardControl={true}

>
  <div><HeroSlider/></div>
  <div><HeroSlider/></div>
  <div><HeroSlider/></div>
  <div><HeroSlider/></div>
</Carousel>

</>

}

export default Hero;