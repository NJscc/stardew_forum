const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

const postRoutes = require("./postRoutes");
router.use("/api/posts",postRoutes)

const topicRoutes = require("./topicRoutes");
router.use("/api/topics",topicRoutes)

// const categoryRoutes = require("./categoryRoutes");
// router.use("/api/categories",categoryRoutes)

const frontEnd = require("./frontEndRoutes");
router.use("/",frontEnd)


module.exports = router;