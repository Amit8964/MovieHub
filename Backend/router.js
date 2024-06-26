const express = require('express');
const multer = require('multer');
const path = require('path');
const { uploadMovie, getMovies, deleteMovie, updateMovie } = require('./controllers/movieController');
const {setUser, loginUser} = require("./controllers/userController")
const router = express.Router();
var jwt = require('jsonwebtoken');
const movie = require("./models/movie")


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let name = file.fieldname;
    let destDr = name == "image" ? "assets/images": "assets/movies"
    console.log(destDr)
      cb(null, destDr);
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });


const verifyToken = async (req, res, next)=>{
  try{


  
const token = req.body.token;
console.log(token)
console.log("test")
if(!token){
  res.status(401).send("Access denied");
}
else{
  const verified = jwt.verify(token, "iamcypher");
  if(verified){
    next();
  }
  else{
    
    res.status(401).send("Unauthorized Token")
  }
  
}
}
catch(err){

res.json({message:"Token Expired", success:false})

}


}




// POST endpoint for uploading movie with image and video
router.post("/uploadmovie", upload.fields([{ name: 'image' }, { name: 'video' }]), uploadMovie);
router.post("/getmovies/:page", verifyToken, getMovies);
router.get("/deletemovie/:id", deleteMovie)
router.post("/updatemovie/:id", updateMovie)
router.get("/upload", (req,res)=>{
    console.log("get requested")
    res.status(200).json({success:true})
});



//temporary enpoit for testing perpose
router.get("/getmovies/:page", getMovies);
router.get("/d", async (req,res)=>{

  let data = await movie.deleteMany();
  if(data){

    res.json({message:"all movies re deleted success fully"})
  }
  else{

    res.json({message:"somthing went wrong"})
  }


});
//her all temporary routes are ending





//user endpoits 
router.post("/setuser", setUser);
router.post("/login", loginUser)



module.exports = router;
