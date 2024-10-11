const express = require("express");
const indexController = require("../controllers");

const router = express.Router();

router.get("/", indexController.test);
router.post("/newPost", indexController.newPost);
router.get("/getPosts", indexController.getPosts);

module.exports = router;
