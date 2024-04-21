const express = require("express");
const app = express();
const cors = require("cors")
const router = require("./router")
const mongoose = require("mongoose")
const path = require("path")



app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use(cors({

"Access-Control-Allow-Origin":"*"

}));

app.use(express.json());
app.use("/", router);

mongoose.connect("mongodb://localhost:27017/movie").then(()=>{

console.log("mongodb connected successfully")

}).catch(()=>{
    console.log("somthing went wrong")
})





app.listen(4000,  ()=>{


    console.log("server is listening on port 4000")


})


