const user = require("../models/user");
var jwt = require('jsonwebtoken');

const setUser = async (req,res)=>{


let data = await user.findOne({email:req.body.email})

if(data){
    res.json({messege:"User allready Exists", success:false});

}
else{
    let User =  new user(req.body);
let userData = await User.save();
if(userData){
    res.json({messege:"User Created Successfully", success:true});
}
else{
    res.json({messege:"Somthing went wrong"})
}

}


}

const loginUser = async (req, res) => {

    try {
        let userData = await user.findOne({ email: req.body.email });

        const checker = (err, isMatch) => {
            if (isMatch) {

//jwt sign should be here;

              const token = jwt.sign({
                email: userData.email
            }, 'your_secret_key', { expiresIn: '1h' });


            res.json({ user: userData.email, token:token });

            } else {
                res.send({ userlogin: false, message: "password was incorrect" })
            }
        }


        if (userData) {
            userData.comparePassword(req.body.password, checker)
        }
        else {
            res.send({ adminlogin: false, message: "User Not Found" })
        }

    }
    catch (err) {
        res.status(404).json({ success: false, message: "internal server err" })
        console.log(err);
    }

}







const updateUserPassword = async (req, res) => {

    try {
   
        let data = await user.findOneAndUpdate({ email: req.body.email }, { $set: { password: req.body.password } }, { new: true })
        if (data) {
            console.log(data)
            res.json({ message: "password updated successfully", redirect: true })
        }
        else {
            res.json({ message: "intrenal server error please try again later", redirect: false })
        }
    }
    catch (err) {

        res.status(404).json({ success: false, message: "internal server err" })
        console.log(err);
    }

}








module.exports = {setUser, loginUser};
