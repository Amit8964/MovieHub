const express = require('express');
const multer = require('multer');
const path = require('path');
const { uploadMovie, getMovies, deleteMovie, updateMovie } = require('./controllers/movieController');
const {setUser, loginUser} = require("./controllers/userController")
const router = express.Router();
var jwt = require('jsonwebtoken');



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




// POST endpoint for uploading movie with image and video
router.post("/uploadmovie", upload.fields([{ name: 'image' }, { name: 'video' }]), uploadMovie);
router.post("/getmovies/:page", verifyToken, getMovies);
router.get("/deletemovie/:id", deleteMovie)
router.post("/updatemovie/:id", updateMovie)
router.get("/upload", (req,res)=>{
    console.log("get requested")
    res.status(200).json({success:true})
});



//user endpoits 
router.post("/setuser", setUser);
router.post("/login", loginUser)



module.exports = router;
