const router = require("express").Router({ mergeParams: true });

const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getFrenchPostFromAirtable,
  getPostBySlug,
} = require("./postController");

router.route("/").get(getAllPosts).post(createPost);

router.route("/by_slug/:slug").get(getPostBySlug);

router.route("/:id").get(getPostById).put(updatePost).delete(deletePost);

module.exports = router;
