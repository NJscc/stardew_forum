const express = require("express");
const router = express.Router();
const {User,Post,Topic} = require("../models");

router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll();
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

