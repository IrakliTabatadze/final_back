const express = require("express");
const feedController = require("../controllers/feed");
const router = express.Router();
const { body } = require("express-validator");
const isAuth = require("../middleware/is-auth");

//feed/posts app.use("/feed",)
router.get("/posts", isAuth, feedController.getPosts);
router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  isAuth,
  feedController.postPost
);

router.get("/post/:postId", isAuth, feedController.getPost);

router.put(
  "/post/:postId",
  isAuth,
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.updatePost
);

router.delete("/post/:postId", isAuth, feedController.deletePost);
module.exports = router;
