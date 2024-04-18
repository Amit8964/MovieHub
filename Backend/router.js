const express = require('express');
const multer = require('multer');
const path = require('path');
const { uploadMovie } = require('./controllers/movieController');
const router = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationPath = file.fieldname === 'image' ? './uploads/images' : './uploads/videos';
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Multer instances for image and video uploads
const upload = multer({ storage }).fields([
  { name: 'image', maxCount: 1 },
  { name: 'video', maxCount: 1 }
]);






// POST endpoint for uploading movie with image and video
router.post("/upload", uploadImage.single('image'), uploadVideo.single('video'), uploadMovie);
router.get("/upload", (req,res)=>{

    console.log("get requested")
    res.status(200);
});

module.exports = router;
