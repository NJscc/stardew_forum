const express = require("express");
const router = express.Router();
const {User,Post,Topic} = require("../models");

router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [{model: User}]
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json({ msg: "an error occured", err });
    }
});

router.get("/:id", (req, res) => {
    Post.findByPk(req.params.id,{})
      .then(postData => {
        res.json(postData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.post("/", (req, res) => {
    if(!req.session.user){
      return res.status(401).json({msg:"ya gotta login to create a blog post!"})
  }
    Post.create({
      text:req.body.text,
      body:req.body.body,
      user_id:req.session.user.id
    })
      .then(newPost => {
        res.json(newPost);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  // router.post("/", (req, res) => {
  //   Post.create(req.session.user.post)
  //     .then(newPost => {
  //         text:newPost.text,
  //         user_id:req.session.user,
  //         title_id:newPost.title_id
  //     }
  //       res.json(newPost);
  //   })
  //     .catch(err => {
  //       console.log(err);
  //       res.status(500).json({ msg: "an error occured", err });
  //     });
  // });

  router.post('/', async (req, res) => {
    try {
      if(!req.session.user){
          return res.status(403)}
        const newpostData = await Post.create({
        text: req.body.text,
        user_id: req.session.user.user_id,
        title_id:req.body.title_id
      });
      res.status(200).json(newpostData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  router.put("/:id", (req, res) => {
    Post.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedPost => {
      res.json(updatedPost);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  //delete a Post
  router.delete("/:id", (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(delPost => {
      res.json(delPost);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;

