const router = require("express").Router({ mergeParams: true });
const { getAllTotaux, getLastPostsOrgs } = require("./dashboardController");
const { protect, restrictTo } = require("../auth/authController.js");

router.route("/").get(getAllTotaux);
router.route("/lasts").get(getLastPostsOrgs);

module.exports = router;
