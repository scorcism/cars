const express = require("express");
const router = express.Router();
const User = require("../models/userModel")


router.post("/login", async(req, res) => {

      const {username , password} = req.body

      try {
          const user = await User.findOne({username , password})
          if(user) {
              res.send(user)
          }
          else{
              return res.status(400).json(error);
          }
      } catch (error) {
        return res.status(400).json(error);
      }
  
});

router.post("/register", async(req, res) => {
    try {
        const {username,password,address} = req.body;
        // console.log("username " + username)
        // console.log("password " + password)
        // console.log("address " + address)

        let newuser  = await User.create({
            username,
            password,
            address
        })
        res.send(newuser)
    } catch (error) {
      return res.status(400).json(error);
    }
});




module.exports = router

