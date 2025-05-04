const express = require("express");
const router = express.Router();
const path = require('path');
const profileControllerPath = path.join(__dirname, 'Controller', 'Profile.controller');
const { Postdetails, getProfile, updateDetails, getUserApplications, getUserApplicants } = require(profileControllerPath);
// const { Postdetails, getProfile, updateDetails, getUserApplications, getUserApplicants } = require('Modules/Profile/Controller/Profile.controller.js');

router.post("/profile/:id", Postdetails);

router.get("/profile/:id/:idSkill", getProfile);

router.put("/profile/:id", updateDetails);

router.get("/applications/user/:id", getUserApplications);

router.get("/applications/JobPost/:jobPostId", getUserApplicants)


module.exports = router;