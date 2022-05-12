const express = require('express');
const router = express.Router();
const {User,Post, Category, Topic} = require('../models');

router.get("/",async (req,res)=>{
   let allPosts = await Post.findAll()
        const hbsposts = allPosts.map(post=>post.get({plain:true}))
        console.log(hbsposts)
        const loggedIn = req.session.user?true:false
    
    const forumCategory = await Category.findAll()
        const cathbs = forumCategory.map(category => category.get({plain:true}))
        console.log(cathbs);
    res.render("home",{
        categories:cathbs,
        posts:hbsposts,
        loggedIn,
        username:req.session.user?.username
    })
})

router.get("/categories/:id", async (req,res) => {
    const oneCategory = await Category.findByPk(req.params.id)
    const loggedIn = req.session.user?true:false
    const hbtopic = await Topic.findAll({
        where: {
            category_id: req.params.id
        }
    })
        console.log(oneCategory)
        console.log(hbtopic)
    res.render("topics",{
        category_title: oneCategory.dataValues.title,
        topics: hbtopic,
        loggedIn,
        username:req.session.user?.username
    })    
})

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect("/profile/-1")
    }
    res.render("login")
})

// go to profile viewer page
router.get("/profile/:id",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    let userId = req.session.user.id;

    // if id is -1, show logged in user
    if(req.params.id !=="-1" ){
        userId = req.params.id;
    }

    User.findByPk(userId,{
        include:[Post]
    }).then(userData=>{
        console.log(userData);
        const hbsData = userData.get({plain:true})
        console.log("=======")
        console.log(hbsData);
        let selfProfile = (req.session.user.id == userId);
        res.render("profile",{
            userBio: hbsData.user_bio,
            userName: hbsData.username,
            selfProfile: selfProfile,
            imageUrl: hbsData.user_avatar
        })
    })
})

// go to profile editor page
router.get("/profileEditor", (req,res) => {
    if(!req.session.user){
        return res.redirect("/login");
    }
    User.findByPk(req.session.user.id)
    .then(userData => {
        const hbsData = userData.get({plain:true})
        res.render("submit_profile", {
            userBio: hbsData.user_bio,
            userName: hbsData.username
        })
    })
})

//submit new user's data to backend
router.post("/profile",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }

    User.update({
        username: req.body.name,
        user_bio:req.body.bio,
        user_avatar:result.info.secure_url
    },
    {
        where: {
            id:req.session.user.id
        }
    }
    ).then(data => {
        res.status(200).json(data);
    })
})

        

module.exports = router;