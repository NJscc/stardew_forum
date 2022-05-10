const express = require('express');
const router = express.Router();
const {User,Post, Category} = require('../models');

router.get("/",(req,res)=>{
    Post.findAll().then(posts=>{
        console.log(posts)
        const hbsposts = posts.map(post=>post.get({plain:true}))
        console.log(hbsposts)
        const loggedIn = req.session.user?true:false
        res.render("home",{posts:hbsposts,loggedIn,username:req.session.user?.username})
    })
})

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect("/profile")
    }
    res.render("login")
})

router.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    User.findByPk(req.session.user.id,{
        include:[post]
    }).then(userData=>{
        console.log(userData);
        const hbsData = userData.get({plain:true})
        console.log("=======")
        console.log(hbsData);
        hbsData.loggedIn = req.session.user?true:false
        res.render("profile",hbsData)
    })
})

module.exports = router;