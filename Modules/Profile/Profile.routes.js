const express = require("express");
const router = express.Router();
const path = require('path');

// استخدم المسار الكامل مع .js
const profileController = require(path.join(__dirname, 'Controller', 'Profile.controller.js'));

router.post("/profile/:id", profileController.Postdetails);
router.get("/profile/:id/:idSkill", profileController.getProfile);
router.put("/profile/:id", profileController.updateDetails);
router.get("/applications/user/:id", profileController.getUserApplications);
router.get("/applications/JobPost/:jobPostId", profileController.getUserApplicants);

module.exports = router;