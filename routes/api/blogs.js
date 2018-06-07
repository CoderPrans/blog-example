const express = require("express");
const router = express.Router();

// @route   GET /api/blogs/test
// @desc    Tests post blogs
// @access  Private
router.get("/test", (req, res) => res.json({ msg: "blogs works" }));

module.exports = router;
