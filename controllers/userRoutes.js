const express = require('express');
const router = express.Router();
const {User,Post,Topic} = require("../models/");
const bcrypt  = require("bcrypt");

//find all
router.get('/', async (req, res) => {
    try {
      const forumUser = await User.findAll({
        include: [{ model: Post }, {model: Topic}]
      });
      res.status(200).json(forumUser);
    } catch (err) {
      res.status(500).json({ msg: "an error occured", err });
    }
  });

  //create a user
  router.post("/", (req, res) => {
    User.create(req.body)
      .then(newUser => {
        req.session.user = {
          id:newUser.id,
          username:newUser.username
        }
        res.json(newUser);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  //should we update with id or a unique user name? 

  router.put("/:id", (req, res) => {
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedUser => {
      res.json(updatedUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });

  router.delete("/:id", (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    }).then(delUser => {
      res.json(delUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });

  module.exports = router;
  
