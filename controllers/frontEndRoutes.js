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
        return res.redirect("/profile")
    }
    res.render("login")
})

router.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    User.findByPk(req.session.user.id,{
        include:[Post]
    }).then(userData=>{
        console.log(userData);
        const hbsData = userData.get({plain:true})
        console.log("=======")
        console.log(hbsData);
        hbsData.loggedIn = req.session.user?true:false
        res.render("submit_profile",hbsData)
    })
})

// router.get("/profile",(req,res)=>{
//     if(!req.session.user){
//         return res.redirect("/login")
//     }
//     User.findByPk(req.session.user.id)
//     }).then(userData=>{
//         console.log(userData);
//         const hbsData = userData.get({plain:true})
//         console.log(hbsData);
//         hbsData.loggedIn = req.session.user?true:false
//     }).then(
//         Post.findByPk(req.params.id, {
//             where: {
//                 post_id: req.session.user_id
//               }
//         }
//     ).then(postData=>{
//         const hbsPostData = postData.get({plain:true})
//         res.render("submit_profile",
//         {
//             post:hbsPostData,
//             user:hbsData,
//             //loggedIn,
//             username:req.session.user?.username}
//     )
// }))

module.exports = router;