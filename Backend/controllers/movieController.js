
const movie = require("../models/movie")
const uploadMovie = async (req, res) => {

  try {
    const { name, description } = req.body;
    let imagePath = req.files['image'][0].path.replace(/\\/g , "/");
    let videoPath = req.files['video'][0].path.replace(/\\/g , "/");
  

    const Movie = new movie({ name, description, image: imagePath, video: videoPath });
    let data = await Movie.save();

    if (data) {
      console.log(imagePath)
      res.status(200).json({ message: 'Movie uploaded successfully', success:true });
      

    }
    else {
      res.status(302).json({ error: "Somthing went wrong", success: false })
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error', success: false });
  }



}


const getMovies = async (req, res) => {
  const page = parseInt(req.params.page);
  let movies = await movie.find().skip((page-1)*10).limit(10);
  res.json(movies);
}

const deleteMovie = async (req, res) => {
  let dMovie = await movie.findByIdAndDelete(req.params.id)
  if (dMovie) {
    res.json({ messege: "Movie deleted successfully", success: true })
  }
  else {
    res.json({ messege: "Somthing went wrong", success: false })
  }

}

const updateMovie = async (req, res) => {

  let uMovie = await movie.findByIdAndUpdate(req.params.id, req.body);
  if (uMovie) {
    res.json({ messege: "movie updated successfully", success: true })

  }
  else {
    res.json({ messege: "somthing went wrong", success: false })
  }

}



module.exports = { uploadMovie, getMovies, deleteMovie, updateMovie }




