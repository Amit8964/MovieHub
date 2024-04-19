
const movie = require("../models/movie")
const uploadMovie = async (req, res) => {

  try {
    const { name, description } = req.body;
    let imagePath = req.files['image'][0].path
    let videoPath = req.files['video'][0].path

    const Movie = new movie({ name, description, image: imagePath, video: videoPath });
    let data = await Movie.save();

    if (data) {
      res.status(200).json({ message: 'Movie uploaded successfully' });
      console.log("ok")

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
  let movies = await movie.find();
  res.json(movies);
}

const deleteMovie = async (req, res) => {
  let dMovie = await movie.findByIdAndDelete(req.params.id)
  if (dMovie) {
    res.json({ messege: "movie deleted successfully", success: true })
  }
  else {
    res.json({ messege: "somthing went wrong", success: false })
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




