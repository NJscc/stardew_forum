const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

const postRoutes = require("./postRoutes");
router.use("/api/posts",postRoutes)

const topicRoutes = require("./topicRoutes");
router.use("/api/topics",topicRoutes)

const categoryRoutes = require("./categoryRoutes");
router.use("/api/categories",categoryRoutes)

const frontEnd = require("./frontEndRoutes");
router.use("/",frontEnd)


/*
router.get("/showsessions",(req,res)=>{
    res.json(req.session)
})

router.get("/setfaveanimal/:faveanimal",(req,res)=>{
    req.session.favAnimal = req.params.faveanimal;
    console.log(req.session);
    res.json(req.session);
})
router.get("/secretclub",(req,res)=>{
    if(!req.session.user){
        return res.status(401).json({msg:"ya gotta login to join the club!"})
    }
    res.json({msg:`welcome to the club ${req.session.user.username}`})
})

*/

module.exports = router;