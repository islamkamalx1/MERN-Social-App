const router = require("express").Router();
const postModel = require("../models/post");
const userModel = require("../models/user");

// *create a post
router.post("/", async (req, res) => {
  try {
    const newPost = await postModel.create(req.body);
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// *update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("post has been updated");
    } else {
      res.status(403).json("you can only update your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
// *delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("post has been deleted");
    } else {
      res.status(403).json("you can only delete your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// *like / dislike post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("post has been disliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// *get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// *get timeline post
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await userModel.findById(req.params.userId);
    const userPosts = await postModel.find({ userId: currentUser._id });

    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) => {
        return postModel.find({ userId: friendId });
      })
    );

    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (error) {
    res.status(500).json(error);
  }
});

// *get user's all posts
router.get("/profile/:username", async (req, res) => {
  try {
    const user = await userModel.findOne({ username: req.params.username });
    const posts = await postModel.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
