const express = require("express");
const router = express.Router();
const {User,Post,Topic} = require("../models");

router.get('/', async (req, res) => {
    try {
      const topicData = await Topic.findAll();
      res.status(200).json(topicData);
    } catch (err) {
      res.status(500).json({ msg: "an error occured", err });
    }
});

router.get("/:id", (req, res) => {
    Topic.findByPk(req.params.id,{
      include: [{model: Post}]
    })
      .then(topicData => {
        res.json(topicData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.post("/", (req, res) => {
    if(!req.session.user){
      return res.status(401).json({msg:"Please login to create a topic!"})
  }
    Topic.create(req.body)
      .then(newTopic => {
        req.session.user = {
          title:newTopic.title,
          text:newTopic.text,
        }
        res.json(newTopic);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  //only owner of that topic should be able to delete
  router.put("/:id", (req, res) => {
    Topic.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedTopic => {
      res.json(updatedTopic);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  //delete a Topic
  router.delete("/:id", (req, res) => {
    Topic.destroy({
      where: {
        id: req.params.id
      }
    }).then(delTopic => {
      res.json(delTopic);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;
