const express = require("express");

const profileController = require("../controllers/profile-controller");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("/viewProfile", authenticate, profileController.viewProfile);

module.exports = router;
