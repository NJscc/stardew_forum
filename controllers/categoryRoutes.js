const express = require('express');
const router = express.Router();
const {Category, Topic} = require("../models/");


//find all
router.get('/', async (req, res) => {
    try {
      const forumCategory = await Category.findAll(
      //   {include: [{ model: Topic }]
      // }
      );
      res.status(200).json(forumCategory);
    } catch (err) {
      res.status(500).json({ msg: "an error occured", err });
    }
  });

  module.exports = router;
  
//find by id

router.get("/:id", (req, res) => {
  Category.findByPk(req.params.id,{
    include: [{model: Topic}]
  })
    .then(categoryData => {
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});