const express = require("express");
const router = express.Router();
const { handleAuth } = require("../controllers/auth");
const handleRefreshAccessToken = require("../controllers/refreshAccessToken");
const handleSignup = require("../controllers/signup");
const handleSignout = require("../controllers/signout");

router.get("/refreshAccessToken", handleRefreshAccessToken);
router.post("/sign-out", handleSignout);
router.post("/sign-up", handleSignup);
router.post("/sign-in", handleAuth);

module.exports = router;
