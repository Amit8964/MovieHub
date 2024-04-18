
const movie = require("../models/movie")
const uploadMovie = async (req,res)=>{

    console.log("ok")

  
        try {
          const {name, description } = req.body;
          const imagePath = req.file.path; // Image path
          const videoPath = req.file.path; // Video path
      
          // Save movie data to MongoDB, along with the image and video paths
          // Example using Mongoose:
          const Movie = new movie({ name, description, imagePath, videoPath });
          let data = await Movie.save();

          if(data){
            res.status(200).json({ message: 'Movie uploaded successfully' });
            console.log("ok")

          }
          else{
            res.status(302).json({message: "somthing went wrong"})
          }     
         
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }



      }




      module.exports = {uploadMovie}




