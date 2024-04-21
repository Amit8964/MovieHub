import "./ShowMovie.css"


const ShowMovie = ()=>{

    return <>
    <div className="showMovieContainer">

<div className="showMovieLeft">

<video width="640" height="360" controls>
        <source src="http://localhost:4000/assets/movies/1713727111853.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
</video>

</div>

<div className="showMovieRight">

<h1>The Movie of the World</h1>
<p>Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Nobis eveniet accusantium ullam,
     voluptas vitae </p>

<p>Ratings : ffff</p>



</div>


    </div>
    </>
}

export default ShowMovie;